import DynamicHeading from '@/components/DynamicHeading'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import {  FaJs, FaReact, FaNodeJs, FaJava, FaArrowRight } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiKotlin, SiAndroidstudio } from 'react-icons/si'
import React from 'react'
import { Button } from '@/components/ui/button'

const names = [
    "مهارات",
    "Вештини",
    "技能",
    "スキル",
    "Skills"
]

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <DynamicHeading names={names} />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 w-full justify-center">
        
        {/* Web Development Card */}
        <Card className="bg-transparent text-white w-full p-8 border-none">
          <CardHeader className="font-semibold text-center lg:text-left text-3xl lg:text-3xl">
            Web Development
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <FaJs className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-yellow-500 transition-transform duration-200" />
                </a>
                JavaScript
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <FaReact className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-blue-500 transition-transform duration-200" />
                </a>
                React.js
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                  <FaNodeJs className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-green-500 transition-transform duration-200" />
                </a>
                Node.js
              </li>
            </ul>
          </CardContent>
          <div className="mt-4">
            <Button className="bg-transparent mt-2 mx-2 w-full  hover:bg-white hover:text-black transition-all">
              View Web Projects <FaArrowRight className="ml-1" />
            </Button>
          </div>
        </Card>

        {/* Artificial Intelligence Card */}
        <Card className="bg-transparent text-white w-full p-8 border-none">
          <CardHeader className="font-semibold text-center lg:text-left text-3xl lg:text-3xl">
            Artificial Intelligence
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                  <SiTensorflow className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-yellow-400 transition-transform duration-200" />
                </a>
                TensorFlow
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                  <SiPytorch className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-orange-600 transition-transform duration-200" />
                </a>
                PyTorch
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
                  <SiScikitlearn className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-blue-400 transition-transform duration-200" />
                </a>
                Scikit-learn
              </li>
            </ul>
          </CardContent>
          <div className="mt-4">
            <Button className="bg-transparent mt-2 mx-2 w-full  hover:bg-white hover:text-black transition-all">
              View AI Projects <FaArrowRight className="ml-1" />
            </Button>
          </div>
        </Card>

        {/* Java, Swing, Kotlin, and Android Studio Card */}
        <Card className="bg-transparent text-white w-full p-8 border-none">
          <CardHeader className="font-semibold text-center lg:text-left text-3xl lg:text-3xl">
            Java Development
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                  <FaJava className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-red-600 transition-transform duration-200" />
                </a>
                Java
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                  <SiAndroidstudio className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-green-400 transition-transform duration-200" />
                </a>
                Android Studio
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer">
                  <SiKotlin className="mr-4 text-4xl lg:text-5xl hover:scale-125 hover:text-purple-500 transition-transform duration-200" />
                </a>
                Kotlin
              </li>

            </ul>
          </CardContent>
          <div className="mt-4">
            <Button className="bg-transparent mt-2 mx-2 w-full  hover:bg-white hover:text-black transition-all">
              View Java Projects <FaArrowRight className="ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default page
