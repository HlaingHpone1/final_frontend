import React from 'react'
import { images } from '../images'

const QandA = ({ data }) => {
    return (
        <div class="py-5 border-b">
            <details class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between font-semibold">
                    <p className=' xs2:text-sm xs:text-base md:text-lg'>{data.question}</p>
                    <span class="transition group-open:rotate-180 xs2:size-5 size-6">
                        <img src={images.downArrow} />
                    </span>
                </summary>
                <p class="group-open:animate-fadeIn mt-3 text-neutral-700 xs2:text-sm xs:text-base md:text-lg">{data.answer}
                </p>
            </details>
        </div>
    )
}

export default QandA