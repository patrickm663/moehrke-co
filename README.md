# moehrke.co
This is the content repo for my personal portfolio site. I had originally wanted to use a JS template, but it became unweildly for a first attempt at a portfolio page. As HTML and CSS are fairly new to me, I am relying on the helpful folk at https://www.w3schools.com for inspiration!

## Deployment
Currently WIP, but the site is currently pipelined from here to AWS CodePipeline to an AWS S3 bucket. I used AWS CloudFront to serve the site through HTTPS, and the domain name is currently pending through AWS Route 53. Future implementations will see IaC (likely Terraform) in a separate repo to version control the AWS infastructure.

## Aknowledgements
This is loosly based off of https://cloudresumechallenge.dev

