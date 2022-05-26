<h1 align='center'>Work Notes</h1>

* 过滤

```typescript
selectedCollections (): string[] {
  return this.queries
    .filter((query, index) => index === this.queries.indexOf(query))
    .map((query) => query.collection)
}
```

* 深拷贝

```javascript
const data = this.data.slice(0)

const newData JSON.parse(JSON.stringify(data))
```

