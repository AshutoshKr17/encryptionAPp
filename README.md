# Encryption and Decryption React Application Overview

## Introduction to the App

This application integrates several cryptographic techniques to ensure secure data handling. It employs AES encryption in CBC mode, PBKDF2 for key derivation, and the appropriate application of salts and initialization vectors (IVs). The design is a bespoke encryption solution, combining established cryptographic primitives and practices tailored to specific needs.

## Purpose and Development

The development of this application was driven by the need for robust encryption and decryption processes, especially for securing the payload in API communications utilized by the developer's company. This React app serves as a subsidiary product of a primary application, details of which remain confidential due to proprietary reasons.

## Application Functionality

Using the app is straightforward:

- Users can paste their JSON data into the application interface.

- Select the desired operation (encryption or decryption).

- Execute the operation by clicking the 'Run' button.

## Configuration Instructions

To set up this project locally, follow these steps, which align with standard Node.js project setups:

1. Clone the repository to your local machine.

2. Run `npm install` to install the required dependencies.

3. Execute `npm start` to launch the application on your local development server.

## Access the Application

The React encryption and decryption application is accessible online at the following URL: [https://encryptionapp.vercel.app/](https://encryptionapp.vercel.app/).

This link leads to the live version of the app, where users can interact with its features and test its encryption and decryption capabilities.
