# CLI - Facturacion con afip automatizado

Facturacion CLI te permite conectarte al WS de Afip y generar batch de facturas.
Esas facturas deben contar con un precio entre los parametros maximos y minimos de afip que te permitan facturarlas sin necesidad de datos del consumidor final.

### Install

```sh
$ npm i
$ sudo facturacion-cli --help

Output:
    usage: facturacion-cli <command>

    Commands:
    facturacion-cli create  create a new invoice
    facturacion-cli info    Get info from some data

    Options:
    --version  Show version number  [boolean]
    --help     Show help  [boolean]
```

### Create

```sh
$ sudo facturacion-cli create --help

Output:
    usage: facturacion-cli create [options]

    Options:
    --version     Show version number  [boolean]
    -n, --amount  Amount of invoices  [number] [required]
    -p, --price   Price of invoices  [number] [required]
    -s, --show    Shwo invoices created  [boolean]
    --help        Show help  [boolean]
```

### Use

```sh
$ sudo facturacion-cli create -p 100 -n 2

Output:
    [CLI] Starting...
    [AFIP] Environment: Production
    [AFIP] Generating 2 invoices of $100 ...
    [AFIP] Invoice 1 created.
    [AFIP] Invoice 2 created.
    [AFIP] 2 invoices created. Total: $200
```
