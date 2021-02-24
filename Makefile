serve:
	go run main.go
build:
	esbuild --bundle src/index.ts --outdir=public --target=es2015 --minify --sourcemap --loader:.ts=ts --format=esm
watch:
	esbuild --bundle --watch src/index.ts --outdir=public --target=es2015 --loader:.ts=ts --format=esm
format:
	dprint fmt
lint:
	dprint check
tools:
	go install github.com/evanw/esbuild/cmd/esbuild@v0.8.51
	cargo install dprint --version=0.11.1

