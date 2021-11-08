# NSAPH Data Platform
 **User and Development Documentation**

<!-- toc -->

- [Glossary](#glossary)
- [NSAPH Utilities](#nsaph-utilities)
- [Core Platform](#core-platform)
- [Data Ingestion and Processing Pipelines](#data-ingestion-and-processing-pipelines)

<!-- tocstop -->

## Glossary

[Glossary](glossary.md) provides some information about
acronyms and other terms used throughout this documentation

## NSAPH Utilities

<!-- section overview from nsaph_utils -->


The nsaph_utils package is intended to hold python 
code that will be useful
across multiple portions of the NSAPH pipelines.

The included utilities are developed to be as independent of
specific infrastructure and execution environment as possible.

Included utilities:

* Interpolation code
* Reading FST files from Python
* various I/O wrappers
* An API and CLI framework
* QC Framework
* Documentation utilities to simplify creation of consistent 
 documentation for NSAPH platform 


<!-- end of section overview from nsaph_utils -->

## Core Platform

<!-- section overview from nsaph -->

The data platform provides generic infrastructure for NSAPH Data Platform
It depends on nsaph_util package, but it augments it
with APIs and command line utilities dependent on the infrastructure 
and the environment. For instance, its components assume presence of PostgreSQL
DBMS (version 13 or later) and CWL runtime environment.

The package is under intensive development, therefore its 
development branches contain some obsolete modules and utilities.
The project structure can also be in flux.

<!-- end of section overview from nsaph -->


[Package Description](platform)

   
## Data Ingestion and Processing Pipelines

| Pipeline | Documentation |
|----------|---------------|
| EPA | [EPA Pipelines](pipelines/epa) |
| Census | [Census Package](pipelines/census)     |
| Gridmet | [Gridmet package](pipelines/gridmet) |
| CMS | [Medicaid Piepline](pipelines/cms) |



