import App from './app'

const PORT = process.env.PORT || 3333

App.listen(PORT, () => {
  console.log(`server andress: http://localhost:${PORT}`);
})
