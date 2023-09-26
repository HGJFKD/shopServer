/* 2023-09-14 12:14:27 [3699 ms] */ 
CREATE DATABASE peher_haneztach;
/* 2023-09-14 12:15:46 [26 ms] */ 
CREATE SCHEMA revenues;
/* 2023-09-14 12:57:23 [131 ms] */ 
CREATE TABLE revenues.revenues (
    id serial Primary Key,
    zeout text null,
    client_name TEXT null, 
    adresse TEXT null, 
    phone TEXT null,
    email TEXT null,
    amount DECIMAL(65,30) null,
    transaction_time TIMESTAMP null,
    makor TEXT null,
    category TEXT null,
    notes TEXT null
);
-- drop table revenues.revenues