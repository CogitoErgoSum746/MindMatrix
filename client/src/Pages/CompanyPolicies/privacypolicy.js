import React from "react";
import Navbar from "../../components/common/Navbar";
import ScrollToTop from "../../components/common/ScrollToTop";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {

    return (
        <>
            <Helmet>
                <title>Terms & Conditions</title>

                <meta name="description" content="" />

                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />

                <meta name="twitter:card" content="" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="" />
            </Helmet>
            <Navbar />
            <ScrollToTop />
            <div className="bg-gray-200">
            <div className="container mx-auto p-10 max-w-5xl text-left bg-white rounded-lg shadow-md ">
                <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

                <p className="mb-4">
                    This privacy policy (“Policy”) relates to the manner SUCCESS STEPS NLP
                    ACADEMY (“we”, “us”, “our”) in which we use, handle and process the
                    data that you provide us in connection with using the products or
                    services we offer. By using this website or by availing goods or
                    services offered by us, you agree to the terms and conditions of this
                    Policy, and consent to our use, storage, disclosure, and transfer of
                    your information or data in the manner described in this Policy.
                </p>

                <p className="mb-4">
                    We are committed to ensuring that your privacy is protected in
                    accordance with applicable laws and regulations. We urge you to
                    acquaint yourself with this Policy to familiarize yourself with the
                    manner in which your data is being handled by us.
                </p>

                <p className="mb-4">
                    SUCCESS STEPS NLP ACADEMY may change this Policy periodically, and we
                    urge you to check this page for the latest version of the Policy in
                    order to keep yourself updated.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    What data is being collected
                </h2>
                <h3>We may collect the following information from you:</h3>
                <br></br>
                <ul className="list-disc pl-6 mb-4">
                    <li>Name</li>
                    <li>Contact information including address and email address</li>
                    <li>Demographic information or preferences or interests</li>
                    <li>
                        Personal Data or Other information relevant/required for providing
                        the goods or services to you
                    </li>
                </ul>

                <p className="mb-4">
                    The meaning of Personal Data will be as defined under relevant Indian
                    laws.
                </p>

                <p className="mb-4">
                    Note: Notwithstanding anything under this Policy as required under
                    applicable Indian laws, we will not be storing any credit card, debit
                    card, or any other similar card data of yours. Please also note that
                    all data or information collected from you will be strictly in
                    accordance with applicable laws and guidelines.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    What we do with the data we gather
                </h2>
                <h3>We require this data to provide you with the goods or services offered by us including but not limited, for the below set out purposes:</h3>
                <br></br>
                <ul className="list-disc pl-6 mb-4">
                    <li>Internal record keeping.</li>
                    <li>For improving our products or services.</li>
                    <li>
                        For providing updates to you regarding our products or services
                        including any special offers.
                    </li>
                    <li>To communicate information to you</li>
                    <li>For internal training and quality assurance purposes</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    Who do we share your data with
                </h2>
                <h3>We may share your information or data with:</h3>
                <br></br>
                <ul className="list-disc pl-6 mb-4">
                    <li>Third parties including our service providers in order to facilitate the provisions of goods or services to you, carry out your requests, respond to your queries, fulfil your orders or for other operational and business reasons.</li>
                    <li>With our group companies (to the extent relevant)</li>
                    <li>
                        Our auditors or advisors to the extent required by them for performing their services
                    </li>
                    <li>Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal obligations or compliance requirements.</li>
                </ul>


                <h2 className="text-2xl font-bold mt-6 mb-2">How we use cookies</h2>
                <p className="mb-4">
                    We use "cookies" to collect information and to better understand
                    customer behavior. You can instruct your browser to refuse all cookies
                    or to indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to avail our goods or services to
                    the full extent. We do not control the use of cookies by third
                    parties. The third party service providers have their own privacy
                    policies addressing how they use such information.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    Your rights relating to your data
                </h2>
                <h3 className="font-semibold">
                    Right to Review -
                </h3>
                <p className="mb-4">
                    You can review the data provided by you and can
                    request us to correct or amend such data (to the extent feasible, as
                    determined by us). That said, we will not be responsible for the
                    authenticity of the data or information provided by you.
                </p>
                <h3 className="font-semibold">
                    Withdrawal of your Consent -
                </h3>
                <p className="mb-4">
                    You can choose not to provide your data,
                    at any time while availing our goods or services or otherwise withdraw
                    your consent provided to us earlier, in writing to our email ID:
                    contact@successteps.in. In the event you choose to not provide or
                    later withdraw your consent, we may not be able to provide you our
                    services or goods. Please note that these rights are subject to our
                    compliance with applicable laws.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    How long will we retain your information or data?
                </h2>
                <p className="mb-4">
                    We may retain your information or data (i) for as long as we are
                    providing goods and services to you; and (ii) as permitted under
                    applicable law, we may also retain your data or information even after
                    you terminate the business relationship with us. However, we will
                    process such information or data in accordance with applicable laws
                    and this Policy.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">Data Security</h2>
                <p className="mb-4">
                    We will use commercially reasonable and legally required precautions
                    to preserve the integrity and security of your information and data.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-2">
                    Queries/ Grievance Officer
                </h2>
                <p className="mb-4">
                    For any queries, questions, or grievances about this Policy, please
                    contact us using the contact information provided on this website.
                </p>
            </div>
            </div>

        </>
    );
};

export default PrivacyPolicy;