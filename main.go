package main

import (
	"embed"
	"io/fs"
	"net/http"
)

//go:embed public/*
var content embed.FS

func main() {
	public, err := fs.Sub(content, "public")
	if err != nil {
		panic(err)
	}
	err = http.ListenAndServe(":8080", http.FileServer(http.FS(public)))
	if err != nil {
		panic(err)
	}
}
