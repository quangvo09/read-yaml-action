<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Read YAML Action

Read YAML content and convert to JSON format

# Usage

1. Create github action file `.github/workflows/read-yaml-action.yml`

2. Save file with content:

```yaml
name: Read yaml
on:
  pull_request:
    branches:
      - master
jobs:
  read-yaml:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: quangvo09/pull-request-action@v1@main
        name: read
        with:
          file_path: ./action.yml
      - name: show
        run: echo "${{ steps.read.outputs.data }}"
```

#### Output

```
echo "{"name":"Read YAML Action","description":"Read yaml file and convert to json","author":"Quang Vo","inputs":{"file_path":{"required":true,"description":"Relative file path to read"}},"output":{"data":{"description":"Content of yaml file in json string format"}},"runs":{"using":"node16","main":"dist/index.js"}}"
```