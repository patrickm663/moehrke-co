# https://patrickmoehrke.com
This is the content repo for my personal portfolio site, built using [Hugo](https://gohugo.io) and the Hugo theme [hugo-coder](https://github.com/luizdepra/hugo-coder/). 

## Deployment
The site is currently pipelined from this repo through AWS CodePipeline-managed webhooks to an AWS S3 bucket. Using an S3 bucket has kept cost low for a static webpage compared to running an EC2 instance and an Nginx Docker container.

I use AWS CloudFront to serve the site through HTTPS, and the domain name is https://patrickmoehrke.com - managed through AWS Route 53.

There is now a form field in the contacts page! When a user sends a message through the contact form, an API POST request is made to an AWS Lambda function which sends me an email notification with the message (thanks to AWS SES). The Lambda function is written in NodeJS and the API is a REST API, created using Amazon API Gateway. There is also some nifty Javascript to disable and re-enable the button between requests, and ensure all required fields are filled before proceeding

Using a similar method above involving Lambda and API Gateway, DynamoDB is brought into the picture in order to track a 'visitor count' on page reloads. Each time the contact page refreshes, DynamoDB is pinged with a value of 1 and the cumulative total is retured. To keep scan resources low, the method is actually an update method rather than a put method, so only one record is maintained. This could be expanded to include a daily/weekly/monthly visitor count as well.

Pull requests and suggestions are welcome and encouraged!

## TODO
Future implementations will see IaC (likely Terraform) in a separate repo to version control the AWS infastructure.

## Aknowledgements
This is loosly based off of the [Cloud Resume Challenge](https://cloudresumechallenge.dev)

## License
Hugo-code theme is licensed under the [MIT license](https://github.com/patrickm663/moehrke-co/LICENSE).
