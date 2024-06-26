USE [softDevelopersDW];

/*****************************************************************************
 *********************** TRUNCATE CUSTOMER TABLES **************************** 
 *****************************************************************************/

TRUNCATE TABLE DBO.Staging_Customer
TRUNCATE TABLE DBO.Dim_Customer
SELECT * FROM DBO.Staging_Customer
SELECT * FROM DBO.Dim_Customer
delete FROM INT.Lineage
delete from int.IncrementalLoads
DBCC CHECKIDENT ('int.Lineage', RESEED, 0)
DBCC CHECKIDENT ('int.IncrementalLoads', RESEED, 0)
DBCC CHECKIDENT ('DBO.Staging_Customer', RESEED, 0)
DBCC CHECKIDENT ('DBO.Dim_Customer', RESEED, 0)
SELECT * FROM INT.Lineage
SELECT * from int.IncrementalLoads

/*****************************************************************************
 *********************** TRUNCATE PROJECT TABLES ***************************** 
 *****************************************************************************/

TRUNCATE TABLE DBO.Staging_Project
TRUNCATE TABLE DBO.Dim_Project
SELECT * FROM DBO.Staging_Project
SELECT * FROM DBO.Dim_Project
delete FROM INT.Lineage
delete from int.IncrementalLoads
DBCC CHECKIDENT ('int.Lineage', RESEED, 0)
DBCC CHECKIDENT ('int.IncrementalLoads', RESEED, 0)
DBCC CHECKIDENT ('DBO.Staging_Project', RESEED, 0)
DBCC CHECKIDENT ('DBO.Dim_Project', RESEED, 0)
SELECT * FROM INT.Lineage
SELECT * from int.IncrementalLoads

/*****************************************************************************
 *********************** TRUNCATE PaymentFact TABLES *************************
 *****************************************************************************/

TRUNCATE TABLE DBO.Staging_Payment
TRUNCATE TABLE DBO.Fact_Payment
SELECT * FROM DBO.Staging_Payment
SELECT * FROM DBO.Fact_Payment
delete FROM INT.Lineage
delete from int.IncrementalLoads
DBCC CHECKIDENT ('int.Lineage', RESEED, 0)
DBCC CHECKIDENT ('int.IncrementalLoads', RESEED, 0)
DBCC CHECKIDENT ('DBO.Staging_Payment', RESEED, 0)
DBCC CHECKIDENT ('DBO.Fact_Payment', RESEED, 0)
SELECT * FROM INT.Lineage
SELECT * from int.IncrementalLoads