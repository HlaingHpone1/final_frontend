import React from 'react'
import Suggestion from '../components/suggestion/Suggestion'
import { ShortAds } from '../components/ads/Ads'
import SearchResult from '../components/searchResult/SearchResult'
import FilterPost from '../components/filterPost/FilterPost'
import Post from '../components/post/Post'
import Footer from '../components/footer/Footer'

const Search = () => {
    return (
        <main className="bg-secondary ">
            <div className='max-w-1240px  mx-auto font-Roboto'>
                <div className='grid grid-cols-3 justify-between gap-x-6 pt-6 px-5'>
                    <section className='xs2:col-span-3  md:col-span-2'>
                        <SearchResult/>
                    </section>
                    <section className=' md:col-span-1 hidden md:block lg:w-80 mx-auto'>
                        <Suggestion/>
                        <ShortAds/>
                        <Footer/>
                    </section>
                </div>

            </div>

        </main>
    )
}

export default Search