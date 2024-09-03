// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next'; // Import for server-side data fetching
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript types for properties
interface Property {
  id: string;
  address: string;
  price: number;
  description: string;
  images: string[];
  contactInfo: string;
}

// Define the functional component
const PropertyList: React.FC<{ properties: Property[] }> = ({ properties }) => {
  return (
    <div className="container-lg mt-5 shadow-lg p-4 mb-5 bg-white rounded">
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4" key={property.id}>
            <div className="card mb-4">
              <Image
                src={property.images[0]} // Assuming the first image is used as the thumbnail
                className="card-img-top"
                alt={property.address}
              />
              <div className="card-body">
                <h5 className="card-title">{property.address}</h5>
                <p className="card-text">Price: {property.price}</p>
                <p className="card-text">{property.description}</p>
                <Link href={`mailto:${property.contactInfo}`} className="btn btn-primary">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fetch data server-side using getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const token = context.req.cookies.token || ''; // Assuming token is stored in cookies

    // Make API request to fetch properties
    const response = await axios.get<Property[]>(`${process.env.NEXT_PUBLIC_API_URL}/properties`, {
      headers: {
        'token': token, // Pass the token in the custom 'token' header
        'Content-Type': 'application/json'
      }
    });

    return {
      props: {
        properties: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching properties:', error);
    return {
      props: {
        properties: [],
      },
    };
  }
};

export default PropertyList;
