export default function CallApi() {
    return fetch(
        "https://newsapi.org/v1/articles?source=cnn&apiKey=5ea271f9f1694f09a9bc58d6ec09a70f"
    ).then((response) => response.json());
}
