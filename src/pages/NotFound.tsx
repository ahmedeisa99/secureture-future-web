
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-32">
        <div className="bg-cyber-navy border border-cyber-light-blue rounded-lg p-8 md:p-12 max-w-md w-full text-center">
          <div className="text-cyber-green mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-cyber-gray mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild className="cta-button w-full">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
