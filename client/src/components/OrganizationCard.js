import React from 'react';
import { Link } from 'react-router-dom';

function OrganizationCard({ org, handleSendCodeToEmail,handleDeleteOrganization}) {


  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
       <Link to={`/admin/getusers/${org.org_name}/${org.org_email}/${org.org_studentType}/${org.org_code}`}>
      <h3 className="text-xl font-semibold">{org.org_name}</h3>
      <p>Email: {org.org_email}</p>
      <p>Type: {org.org_studentType}</p>
      <p>Code: {org.org_code}</p>
      </Link>
      <Link to="/admin">
      </Link>
      <Link to="/admin">
      <button
        onClick={() => handleSendCodeToEmail(org.org_name, org.org_email, org.org_studentType)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-2"
      >
        Send Mail
      </button>
      <button
        onClick={() => handleDeleteOrganization(org.org_name, org.org_email,org.org_studentType, org.org_code)}
        className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gred-500 focus:ring-opacity-50 mt-2"
      >
        Delete
      </button>
      </Link>
    </div>
  );
}

export default OrganizationCard;
