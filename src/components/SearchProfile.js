import { useContext, useState } from "react"
import { GithubContext } from "../contexts/github/GithubContext"

function SearchProfile() {

    const { searchResult, users, clearResult } = useContext(GithubContext)

    const [term, setTerm] = useState('')
    const handleOnChange = (e) => setTerm(e.target.value)
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (term === '') {
            alert('Isi something donk')
        } else {
            searchResult(term)
        }
    }

    return (
        <div className="container mx-auto mb-8">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div>
                    <form className="relative" onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-full input input-bordered rounded"
                                value={term}
                                onChange={handleOnChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-ghost absolute top-0 right-0">Search</button>
                    </form>
                </div>
                <div hidden={users.length === 0}>
                    <button onClick={clearResult} className="btn btn-ghost">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default SearchProfile
