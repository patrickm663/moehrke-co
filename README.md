# https://patrickmoehrke.com
This is the content repo for my personal portfolio site, built using [Hugo](https://gohugo.io) and the Hugo theme [hugo-coder](https://github.com/luizdepra/hugo-coder/). 

## Deployment
The site is currently pipelined from this repo through AWS CodePipeline-managed webhooks to an AWS S3 bucket. Using an S3 bucket has kept cost low for a static webpage compared to running an EC2 instance and an Nginx Docker container.

I use AWS CloudFront to serve the site through HTTPS, and the domain name is https://patrickmoehrke.com - managed through AWS Route 53.

There is now a form field in the [contacts page](https://patrickmoehrke.com/contact)! When a user sends a message through the contact form, an API POST request is made to an AWS Lambda function which sends me an email notification with the message (thanks to AWS SES). The Lambda function is written in NodeJS and the API is a REST API, created using Amazon API Gateway. 

Future implementations will see IaC (likely Terraform) in a separate repo to version control the AWS infastructure.

Pull requests and suggestions are welcome and encouraged!

## Aknowledgements
This is loosly based off of the [Cloud Resume Challenge](https://cloudresumechallenge.dev)

## License
Hugo-code theme is licensed under the [MIT license](https://github.com/patrickm663/moehrke-co/LICENSE).
