import { useEffect, useState } from "react"

export default function Health() {
  const [data, setData] = useState<string>("Loading...")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((result) => {
        setData(`Fetched successfully: ${result.title}`)
      })
      .catch(() => {
        setData("Failed to fetch data")
      })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Health Check</h1>
      <p className="mt-4">{data}</p>
    </div>
  )
}