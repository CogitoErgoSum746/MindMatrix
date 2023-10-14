import React from 'react';
import {Link} from 'react-router-dom';

function OrganizationCard({ org }) {

  return (
    <Link to={`/admin/getusers/${org.org_name}/${org.org_email}/${org.org_code}`}>
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h3 className="text-xl font-semibold">{org.org_name}</h3>
      <p>Email: {org.org_email}</p>
      <p>Code: {org.org_code}</p>
    </div>
    </Link>
  );
}

export default OrganizationCard;
