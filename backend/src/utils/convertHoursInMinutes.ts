export default (time: string) => {
  const [hour, minuts]= time.split(':').map(Number)
  return hour * 60 + minuts;
}
