import React from 'react'
import { DoubleBorderSpinner } from 'react-fancy-loader'

export default function Loader() {
    return (
        <>
              <DoubleBorderSpinner
                    size={50}
                    color="#FFF"
                    outlineColor="#222"
                    stroke={4}
                    duration={700}
                />
        </>
    )
}
