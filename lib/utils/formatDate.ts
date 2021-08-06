const formatDate = (date: string | number) => {
  const now = new Date(date).toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  })
  return now
}

export default formatDate
