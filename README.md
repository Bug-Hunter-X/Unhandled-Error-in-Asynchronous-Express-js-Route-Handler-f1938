# Unhandled Error in Asynchronous Express.js Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled errors in asynchronous route handlers.  The example uses `setTimeout` to simulate an asynchronous operation that may fail.  If the simulated operation fails, an error is thrown, but because it's within an asynchronous callback, Express.js's error-handling middleware won't catch it, resulting in a silent failure.

## The Problem

The `bug.js` file shows an Express.js server with a route that simulates an asynchronous operation.  The operation randomly either succeeds or fails, throwing an error in the failure case. The error is not properly handled. 

## The Solution

The `bugSolution.js` file demonstrates how to handle this error using either try...catch blocks or by using async/await to make the error handling clear and explicit.