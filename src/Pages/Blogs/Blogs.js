import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="mx-3">
      <h2>Blogs</h2>
      <p>
        <strong>
          Question 1: Difference between authorization and authentication
        </strong>
      </p>

      <p>
        <strong>Answer:</strong>
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              In authentication process, the identity of users are checked for
              providing the access to the system.
            </td>
            <td>
              While in authorization process, person’s or user’s authorities are
              checked for accessing the resources.
            </td>
          </tr>
          <tr>
            <td>In authentication process, users or persons are verified.</td>
            <td>While in this process, users or persons are validated.</td>
          </tr>
          <tr>
            <td>It is done before the authorization process.</td>
            <td>
              While this process is done after the authentication process.
            </td>
          </tr>
          <tr>
            <td>It needs usually user’s login details.</td>
            <td>While it needs user’s privilege or security levels.</td>
          </tr>
          <tr>
            <td>
              Authentication determines whether the person is user or not.
            </td>
            <td>While it determines What permission do user have</td>
          </tr>
        </tbody>
      </Table>

      <p>
        <strong>
          Question 2: Why are you using firebase? What other options do you have
          to implement authentication?
        </strong>
      </p>
      <p>
        <strong>Answer:</strong>
      </p>

      <p>
        Firebase can be seen as a server-less backend for your mobile apps, web
        apps, etc. It is a service provided by Google. It has many features like
        Realtime database, Cloud functions, Analytics, Crashlytics, Cloud
        Firestore, etc. Firebase can be used when you do not want to spend a lot
        of time developing your own backend. It can be used for rapid
        development. I have been using it in my apps in production. You will not
        have to take care of servers, etc, Google will take care of it for you.
        If you do not find the need to develop your own backend, Firebase is one
        of the best options.
      </p>

      <p>
        There are some other options to implement authentication. <br />
        <strong>Parse: </strong> Parse is a complete open-source application
        stack and backend framework that offers a collection of tools and
        features to help you develop your apps. <br />
        <strong>Back4App: </strong> Back4App is an open source, low code,
        backend alternative to Firebase that’s based on the Parse platform. The
        software allows you to develop modern apps on a global scale and faster
        without managing infrastructure. <br />
        <strong>AWS Amplify:</strong> AWS is a cloud platform by Amazon that
        provides a set of tools and services, which can be used on their own or
        together. Mobile and front-end developers can use AWS Amplify to build
        scalable full-stack apps powered by the platform.
      </p>

      <p>
        <strong>
          Question 3: What other services does firebase provide other than
          authentication
        </strong>
      </p>
      <p>
        <strong>Answer: </strong> There are many services which Firebase
        provides, Most useful of them are: <br />
        <strong>Cloud Firestore</strong> <br />
        <strong>Cloud Functions</strong> <br />
        <strong>Hosting</strong> <br />
        <strong>Cloud Storage</strong> <br />
        <strong>Remote Config</strong> <br />
        <strong>Dynamic Links</strong> <br />
        <strong>Cloud Messaging</strong> <br />
        <strong>Predictions</strong> <br />
      </p>
    </div>
  );
};

export default Blogs;
