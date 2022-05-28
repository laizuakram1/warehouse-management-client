import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-2'>Our Blogs</h2>

            <div className="blog">
                <h4>Q.Different between javascript and node js?</h4>
                <h6>Javascript:</h6>
                <p>Javascript is a scripting language that is run with any web browser. It's mostly use in client side.Javascript is capable for html and play with DOM.Javascript can run any browser engine like(Webkit, Blink, Gecko).</p>
               
                <h6>Node js:</h6>
                <pL>Node js is a opensource runtime environment for javascript. That allows the javacript run with server-side. Node js allows javascript code run to outside of browser. Its use in server site. Node js is don't have capability for add any kind of Html tags.Node js run with chrome default engine (V8 engine).</pL>
              
            </div>
            <br />
            <div className='blog'>
                <h4>Q.When should you use Node js and Mongodb?</h4>
                <h6>MongoDb:</h6>
                <p>Mongodb is a No-SQL database for stored data. If you need huge data sored space with dynamic, fast and instant recovery this time you can use mongodb. Mongodb is a database that represent data as Json format.</p>
                <h6>Node js:</h6>
                <p>Node js is a runtime environment for javascript . It is build with V8 engine and handle connectivity javascript to server. Every server and client site response are handle node js.</p>
            </div>
            <div>
                <h4>Q.Difference between Sql and No-SQL? </h4>
                <h6>Sql:</h6>
                <p>Sql database are relational and structured query language with predefined schema.Its vertically scalable and tabular form base.Sql is better for multi row transaction.</p>
                <h6>No-SQL:</h6>
                <p>No-SQL is non-relational database with dynamic schema. It's horrizontally scalable and document, key-value, graph or wide column store.No-SQL database is better performance for Json data.</p>
            </div>
            <div className='blog'>
                <h4>Q. What is the purpose of JWT and how does it works?</h4>
                <p>JWT mean Json Web Token. JWT is works for a client and server site. JWT use cryptographic algorithm for check issue or user information in server or client site. JWT are use as a security purpose for user authentication. Users any issued are signin with JWT is secure.</p>
            </div>

        </div>
    );
};

export default Blog;