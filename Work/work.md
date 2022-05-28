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

* 去空格

```typescript
export function trimStringFields (formData: any): any {
  for (const data in formData) {
    if (typeof (formData[data]) === 'string') {
      formData[data] = formData[data].trim()
    }
  }
  if (formData.address) {
    for (const data in formData.address) {
      if (typeof (formData.address[data]) === 'string') {
        formData.address[data] = formData.address[data].trim()
      }
    }
  }
  return formData
}

const userData = trimStringFields({
        ...this.user,
        companies: this.user.companies.items
      })
```

* 如果有一万个 li 怎么

















1. 

cheng.cui+user040

@better-boards.com

