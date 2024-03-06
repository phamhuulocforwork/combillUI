import React from 'react'
import PropTypes from 'prop-types'
import Input from './components/Input'
import Rating from './components/Rating/Rating'

const ProductReview = () => {
  return (
    <div className="container flex justify-center">
      <div className="w-[40rem] rounded-3xl bg-white p-12 relative text-slate-800">
        <div className="absolute top-8 right-8 bg-slate-200 text-slate-500 hover:bg-red-400 hover:text-slate-50 hover:rotate-90 transition duration-500 p-2 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Overall rating</h1>

          <div className="space-y-1">
            <ul className="flex gap-1">
              <Rating></Rating>
            </ul>
            <p className="text-sm font-medium">Click to rate</p>
          </div>

          <Input
            title="Review title"
            placeholder="Example: Easy to use"
            type="text"
          ></Input>

          <p className="block text-sm font-semibold">
            Would you recommend this product to a friend?
          </p>
          <div className="flex gap-8">
            <div>
              <input
                type="radio"
                id="yes"
                value="yes"
                name="rec product"
                className="mr-2 scale-150 accent-slate-800 cursor-pointer"
              />
              <label
                htmlFor="yes"
                className="text-sm font-semibold cursor-pointer"
              >
                Yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                value="no"
                name="rec product"
                className="mr-2 scale-150 accent-slate-800 cursor-pointer"
              />
              <label
                htmlFor="no"
                className="text-sm font-semibold cursor-pointer"
              >
                No
              </label>
            </div>
          </div>

          <Input
            title="Product review"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is"
            type="textarea"
          ></Input>

          <div className="flex gap-4">
            <div className="grow">
              <Input
                title="Nickname"
                placeholder="Example: bob27"
                type="text"
              ></Input>
            </div>
            <div className="grow">
              <Input
                title="Email address (will not be published)"
                placeholder="Example: your@email.com"
                type="text"
              ></Input>
            </div>
          </div>

          <div>
            <input
              type="radio"
              id="accept"
              value="accept"
              name="accept the terms"
              className="mr-2 scale-150 accent-slate-800 cursor-pointer"
            />
            <label
              htmlFor="yes"
              className="text-sm font-semibold cursor-pointer"
            >
              I accept{' '}
              <u className="cursor-pointer">the terms and conditions</u>
            </label>
          </div>

          <p className="text-xs font-semibold">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>

          <button className="px-4 py-3 bg-slate-900 rounded-md text-slate-50 text-sm hover:-translate-y-1 transition duration-500">
            Submit product review
          </button>
        </div>
      </div>
    </div>
  )
}

ProductReview.propTypes = {}

export default ProductReview
