import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const Stars = (props) => {
    const { stars } = props;
    return (
        <>
            {stars === 5 ? (<>
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
            </>
            ) : ''}
            {stars === 4 ? (<>
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiOutlineStar className='star' />
            </>
            ) : ''}

            {stars === 3 ? (<>
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
            </>
            ) : ''}

            {stars === 2 ? (<>
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
            </>
            ) : ''}

            {stars === 1 ? (<>
                <AiFillStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
                <AiOutlineStar className='star' />
            </>
            ) : ''}

        </>
    )
}

export default Stars