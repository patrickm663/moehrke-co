# https://patrickmoehrke.com
This is the content repo for my personal portfolio site, built using [Hugo](https://gohugo.io) and the Hugo theme [hugo-coder](https://github.com/luizdepra/hugo-coder/). 

## Deployment
The site is currently pipelined from this repo through AWS CodePipeline-managed webhooks to an AWS S3 bucket. Using an S3 bucket has kept cost low for a static webpage compared to running an EC2 instance and an Nginx Docker container.

I used AWS CloudFront to serve the site through HTTPS, and the domain name is https://patrickmoehrke.com - managed through AWS Route 53. 

Future implementations will see IaC (likely Terraform) in a separate repo to version control the AWS infastructure.

Pull requests and suggestions are welcome and encouraged!

## Aknowledgements
This is loosly based off of the [Cloud Resume Challenge](https://cloudresumechallenge.dev)

## License
Hugo-code theme is licensed under the [MIT license](https://github.com/patrickm663/moehrke-co/LICENSE).
