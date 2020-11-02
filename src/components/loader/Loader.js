import React from 'react'
import { DoubleBorderSpinner } from 'react-fancy-loader'

export default function Loader() {
    return (
        <>
              <DoubleBorderSpinner
                    size={50}
                    color="#2a2a8f"
                    outlineColor="#222"
                    stroke={4}
                    duration={700}
                />
        </>
    )
}
