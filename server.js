import app from './src/app.js'
const PORT = process.env.PORT || 8000

app.listen(PORT, () =>
  console.log(`Server in running on http://localhost:${PORT}`)
)
