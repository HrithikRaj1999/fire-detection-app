import React from "react";
import CarouselComponent from "./Carousel";
import Navbar from "./MyNavbar";
import "../CSS/Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Fire Detection System Using Artificial Intelligence Techniques</h1>
      </div>
      <CarouselComponent />
      <div className="wpb">
        <div className="wpb_wrapper">
          <h2> Fire Detection </h2>

          <img src=".\Building Images.PNG"  class="center"/>

          <p>
            The proposed model focuses on the system which is capable to detect
            the Fire in Real Time. The Fire is detected on the basis of color.
            Contours and Bounding Boxes are used for the detection purpose. If
            two fires are seen in the frame, the system has the ability to
            separate them on the basis of numbers. The system is enhanced with
            Google Text to Speech Recognition due to which it is capable of
            generating the alert to the user when Fire is detected.
          </p>
          <p>
            The system also consists of five other masks in which it was seen
            how first mask consists of noisy data with the image and how inner
            and outer noisy data is reduced in other masks. Including this, it
            also consists of Bitwise-AND mask in which a coloured image of that
            particular fire can be seen and also the system have the Edge
            Detection ability. Both the Bitwise-AND mask and Edge Detection are
            free from noisy data.
          </p>
          <h2> Google Text to Speech</h2>
          <p>
            Text to Speech is a process which converts the words on a computer
            or any other device into an audio. It can also be called as a speak
            aloud system. It helps a person to be focused on a particular
            compression. When talking about Google’s text to speech, there is
            only one thing which comes in mind is the Wavenet. It was introduced
            in 2016 and was made by the UK based Deep Mind which is one of the
            sub division of Google. It is an advanced voice synthesizer which
            stores the human voice in the database and re-creates it with a rate
            of 24,000 samples per second. There are variety of languages which
            are supported by the Google’s text to speech which are English,
            Hindi, French, German, Chinese, Japanese, Italian, etc. . A
            combination of the two types of alarm
          </p>

          <h2>Morphological Transformations</h2>
          <p>
            Morphological operation is one of the operation of OpenCV and is
            denoted by morphologyEx(). It is basically applied on the binary
            images. This function requires only two parameters that are original
            image and that other image in kernel. Kernel is the one which
            decides the nature of the operation. There are two basic operators
            which are Erosion and Dilation. In case of Erosion, the pixel in an
            image is considered one only if all the pixels in the kernel are
            one.
          </p>
          <p>
            Dilation is somewhat opposite of Erosion. In this, a pixel in an
            image is considered one only when at least one pixel in the kernel
            is one. Erosion removes the boundaries of a structure in an image,
            thus reducing its size. So, after that, it is important to use
            Dilation method. Erosion followed by Dilation is also called as
            Opening which is used to remove noisy data on the outer part of the
            structure in an image.
          </p>
          <p>
            Dilation followed by Erosion is also called as Closing. It is used
            to remove noisy data inside the structure of an image.
          </p>

          <h2> Bitwise AND Operation</h2>
          <p>
            Bitwise AND is one of the operation of OpenCV which is used for
            masking specific channels in the image. The basic concept behind
            this is the addition of any color with the black color because as we
            are dealing with binary image, thus the value of black is considered
            as zero and so the addition of these two will give us the result as
            any color.
          </p>
          <p>
            Suppose that we have two images named as image1 and image2 and we
            want to put a random structure of image1, then we first create ROI
            of image1, mask and mask inverse of image2. Mask inverse will create
            two regions that are white and black in which we have to put image1
            on the white part and leave the black part.
          </p>
          <p>
            Now image2 as a foreground of ROI needs to be created due to which
            that random structure of image2 will be filled in the white part of
            the mask. After that when two are combined, thus creates a perfect
            ROI.
          </p>
          <h2>Edge Detection</h2>
          <p>
            Edge Detection as the name suggest is the automatic detection of an
            object’s edge. Edge is place of rapid change in image intensity.
            Thus when dealing with fire as an object, the usage of edge
            detection concept becomes very important. Edges can be categorized
            into three parts that are horizontal edge, vertical edge and
            diagonal edge. Through edge detection we can identify sudden change
            in an object. It helps every time in segregating the objects. Most
            semantic and shape information can be retrieved as it is encoded in
            the edges.
          </p>
          <h2>Fire Detection using Edge Detection Method</h2>

          <img  src=".\Detection.PNG"  class="center"/>


          <p>
            The above images are acquired during the real time test. Three
            different mask are formed that are the original mask, Bitwise AND
            mask and edge detection mask. In the original mask, a number is
            shown before the String that is Fire which means that the system
            identified fire as one object. If there are two fire in the same
            image, the system differentiated it as 1 Fire and 2 Fire.
          </p>
        </div>
      </div>
    </>
  );
}
