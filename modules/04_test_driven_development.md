# Module 4: Test Driven Development

Module objective - 30 min:
* Understand when to write unit vs. functional tests
* Write unit and functional tests for the S3 server using a test-driven
  development process
* Make the fix and open a pull request

## Unit vs. Functional tests

### Unit

Unit tests are written from a programmer's perspective. They ensure that a
particular method of a class successfully performs a set of specific tasks. Each
test confirms that a method produces the expected output when given a known
input.

### Functional

Functional tests are written from a user's perspective. These tests confirm that
the system does what users are expecting it to.

[credit](http://www.softwaretestingtricks.com/2007/01/unit-testing-versus-functional-tests.html)

## Task

Oops! There is a small compatibility issue with the Scality S3 server.

When performing the following operations using AWS S3:

```
$ aws s3api create-bucket --bucket bennett-compatibility-test
$ aws s3api put-object --bucket bennett-compatibility-test --key test
$ aws s3api get-object --bucket bennett-compatibility-test --key test foo
```

AWS responds with the following output:

```
{
    "AcceptRanges": "bytes",
    "ContentType": "binary/octet-stream",
    "LastModified": "Tue, 10 Apr 2018 05:42:07 GMT",
    "ContentLength": 0,
    "ETag": "\"d41d8cd98f00b204e9800998ecf8427e\"",
    "Metadata": {}
}
```

However, when performing the following operations using Scality S3:

```
$ aws s3api create-bucket --bucket bennett-compatibility-test
$ aws s3api put-object --bucket bennett-compatibility-test --key test
$ aws s3api get-object --bucket bennett-compatibility-test --key test foo
```

Scality S3 server responds with the following output:

```
{
    "LastModified": "Tue, 10 Apr 2018 05:46:03 GMT",
    "ContentLength": 0,
    "ETag": "\"d41d8cd98f00b204e9800998ecf8427e\"",
    "WebsiteRedirectLocation": "",
    "Metadata": {}
}
```

### Current behavior:
The get object and head object requests includes the WebsiteRedirectLocation
header as an empty string if it was not set on the object.

### Expected behavior:
The WebsiteRedirectLocation should not be included in the get object or head
responses if it was not set on the object.

## Objective
1. Create a new branch, based on master, with the proper naming scheme.

   `git checkout -b fix/[JIRA ISSUE #]/website-redirect-header-response`

2. Write unit and functional tests using test-driven-development practices to
reproduce the issue and define the expected behavior.

3. Fix the code so that the tests pass.

4. Open a pull request with the fix.

5. Review the pull request and get it merged!

| Previous |
|:---------|
| [Module 3](./03_asynchronous_testing.md) |