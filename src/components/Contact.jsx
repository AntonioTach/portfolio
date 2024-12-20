import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => { 
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_xe8x2kl', 
      'template_np8lz8g', 
      { 
        from_name : form.name,
        to_name : 'Antonio Tach',
        from_email : form.email,
        to_email : 'antachsoftware@gmail.com',
        message : form.message,
      }, 
      'KBsD5bibLfe1qsF3Z'
    )
      .then(() => {
        setLoading(false)
        alert('Message sent successfully!')
        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch(() => {
        alert('Failed to send message!')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Are you interested?</p>
        <h3 className={styles.sectionHeadText}>Contact me!</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outlined-none w-fit border-none text-white rounded-lg font-medium hover:bg-black-200 transition duration-300 ease-in-out"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact") 