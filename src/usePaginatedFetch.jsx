import { useEffect, useState } from "react"
import _ from "lodash"

const usePaginatedfetch = (url, pageSize) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)

        const paginatedData = _.chunk(data, pageSize)

        setData(paginatedData)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, []);

    return [loading, data]
}

export default usePaginatedfetch