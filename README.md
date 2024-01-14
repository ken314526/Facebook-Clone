# **Facebook Clone**

A full-stack web application replicating the core features of the Facebook website using ReactJS, NodeJS, SocketIO, ExpressJS, MongoDB, Mongoose, REST API, and Hashing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is a **Facebook Clone** that aims to replicate the main functionalities of the popular social media platform. It includes features such as user authentication, real-time updates through SocketIO, and a robust REST API for seamless communication between the client and server.

## Features

- `User Authentication:` Secure user registration and login system with password hashing for enhanced security.
- `Real-time Updates:` Utilizing SocketIO for real-time communication and updates, mimicking Facebook's dynamic content delivery.
- `RESTful API:` A comprehensive REST API for handling various operations such as creating posts, comments, friend requests, etc.
- `MongoDB Database:` Integration with MongoDB and Mongoose for efficient data storage and retrieval.
- `ReactJS Frontend:` A modern and responsive user interface built with ReactJS, providing a seamless user experience.
- `NodeJS and ExpressJS Backend:` A robust server-side architecture using NodeJS and ExpressJS to handle API requests and business logic.

## Technologies Used

- ReactJS
- NodeJS
- ExpressJS
- REST API
- SocketIO
- MongoDB
- Mongoose
- Hashing (for password security)

## Getting Started

To get started with the project, follow these instructions.

## Installation

1. Clone the repository: `git clone https://github.com/ken314526/Facebook-Clone.git`
1. Navigate to the project directory: `cd facebook-clone`
1. Install dependencies:

    - For client side (`client` directory):
    ```bash
    cd client # Go to client-side directory
    npm install # Install client-side dependencies
    ```

    - For server side (`server` directory):
    ```bash
    cd server # Go to server-side directory
    npm install # Install server-side dependencies
    ```

    - For sockets side (`sockets` directory):
    ```bash
    cd socket # Go to socket-side directory
    npm install # Install sockert-side dependencies
    ```

## Usage

- Start the server: 

    ```bash
    cd server
    npm start 
    ```
- Start the client: 
    ```bash
    cd client 
    npm start
    ```
- Start the sockets: 
    ```bash
    cd socket 
    npm start
    ```
- Your Facebook clone should now be accessible at http://localhost:3000

