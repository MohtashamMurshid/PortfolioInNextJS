---
title: "Report of Bone Classification"
category: "CNN"
date: "02-02-2023"
---
Acknowledgements

We extend our sincere thanks to Ms. Nicole from the Computer Vision and Natural Language Processing module for her invaluable guidance and support throughout this project. We are also grateful to Madushani Rodrigo, the author of the Kaggle dataset used in our research, for providing us with essential data.

  

We also acknowledge the dedicated efforts of our group members: Mohtasham Murshid Madani, Hashim Choudhry, Tan Wei En, Riyan Mushtaq, Tamir Gowhar Khan, Ahn Jae Hyeong, and Anvitha Rao. Their collaboration and contributions have been crucial to the successful completion of this work.

  
  
  
  
  
  
  
  
  
  
  
  
  
  

Abstract

The automatic classification of bone fractures is highly important in the progress of medical imaging as manual interpretation is liable to mistakes and laborious. The goal of this project is to prescribe a solution based on the computer vision approach for the binary classification of bone fractures based on the X-ray images. For the development and the evaluation of the DL models, we relied on the Fracture Multi-Region X-ray Dataset available on Kaggle with the number of images equal to 10,580. Comparing the performance of ResNet50 and VGG16 two basic CNN architectures were used for this comparison. To improve the given dataset, data cleaning, normalization, and augmentation were used because they helped preprocess the data. In all architectures, both transfer learning where the weights were initialized from the ImageNet and training from scratch were done. The performances of the models were assessed on accuracy, precision, recalling, and F1-score. The ResNet50 reached such accuracy as 92%, precision of the model is 0. 86, recall of 0. Precision is 99%, recall is 99%, and the F1-score is 0. 93. The results showed The architecture with the highest scores was VGG16 that had perfect accuracy, precision, recall, and F1-score of 1. 00. From the result, it is recommended that VGG16 is superior and efficient in proposing the correct classification for bone fracture detection and these prove that deep learning models have potential to revolutionize medical diagnosis in the near future and open new doors for the betterment of patient’s healthcare . More detailed, additional studies in the field of ensemble, data augmentation, and hyperparameters optimization will be made in the future.

  
  
  
  
  
  
  
  

# Table of content

[1. Introduction 9](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.up98y09bizyi)

[1.1. Background 9](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.wlmdqd97uyip)

[1.2. Research Goal 10](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.66paz7jo8k4g)

[1.3. Research Objectives 10](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.mwii4z2bvw91)

[2. Related works 11](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.fwqg2vj8ehwu)

[2.1. Gap Analysis 12](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.4nl77nxjmx31)

[2.2. Scope of research 12](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.958zie27tm6d)

[3. Methodology 14](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.y6szmh2g7ds8)

[3.1. Dataset 14](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.hyg80og62dhe)

[3.2. Data Preparation 15](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.qy1rogxefgqm)

[3.4. Model Evaluation 21](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.8f0jtlufce26)

[3.5. Summary of methodology 23](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.tjkfhgoj8b87)

[4. Implementation and Results 25](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.2deffllygmew)

[4.1. Importing Dataset 25](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.uapvv69fmrdk)

[4.2. EDA 25](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.635kv6ftv12)

[4.3. Modeling 25](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.iozmrdkyvga4)

[4.4. Summary of Implementation and Results 25](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.l7ekm6j5vav2)

[5. Analysis and Recommendations 26](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.bqgi30xt3ff5)

[5.1. ResNet50 Analysis 26](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.pamfaragjxao)

[5.2. VGG16 Analysis 29](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.7i98d8681fu2)

[5.3. Custom CNN model 32](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.vwjxygpgpa2v)

[5.4. Comparative Analysis 34](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.ppe08sl1unqn)

[5.5. Recommendations for Further Improvement 35](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.jdedwy76cyz)

[5.6. Social Impacts and Ethical Issues 37](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.i5wmzjlpxo2x)

[6. Conclusions 38](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.86tscrk7a7jm)

[7. References 39](https://docs.google.com/document/d/1RTBoPzYHit2QFb6ZAS-EXpK6QpoHcIseZXjr9_crERE/edit#heading=h.4fao6aokylzs)

1. # Introduction 
    

1. ## Background
    

The identification and classification of bone fractures is critical in medical imaging, necessitating precise and prompt diagnosis to ensure optimal patient care and treatment. Early detection of fractures is critical for avoiding problems and ensuring proper healing. If fractures are not identified or misdiagnosed, they can lead to inadequate treatment, resulting in prolonged discomfort, reduced function, or even permanent disability. Ensuring high accuracy and efficiency in fracture detection is thus critical for providing optimal patient care.Traditionally, radiologists used their expertise to examine X-ray images for fractures. This manual procedure takes into account the patient's medical history, the mechanism of injury, and minor visual cues in the X-ray pictures. Despite their significant training, radiologists sometimes make errors, especially under severe workloads, exhaustion, or confusing cases. Despite their significant training, radiologists sometimes make mistakes, especially when working with severe workloads, weariness, or confusing cases. This heterogeneity in human interpretation might result in conflicting diagnosis, creating a considerable challenge for medical therapy.Manual interpretation of X-ray pictures is time-consuming and error-prone, particularly when dealing with elaborate or tiny fractures. Each image necessitates meticulous examination, and the intense pressure in emergency departments to give rapid diagnosis might exacerbate error rates. Complex fractures, such as those with many fragments or in unusual positions, make exact detection more challenging.

2. ## Research Goal
    

Creating and testing deep learning models for the identification and categorization of bone fractures from radiography pictures is the main objective of this project. This study compares the effectiveness of two popular convolutional neural network (CNN) designs, ResNet50 and VGG16, in precisely detecting fractures in a range of anatomical locations.

  
  

3. ## Research Objectives
    

To accomplish the research objective, we have set the following goals: Use the Fracture Multi-Region X-ray Dataset from Kaggle, which contains 10,580 pictures classed as fractured or non-fractured. To increase dataset quality and model performance, use preprocessing procedures such as data augmentation, normalization, and grayscale conversion. Create and train ResNet50 and VGG16 models on the preprocessed dataset. To measure the success of the models in fracture identification, use metrics such as accuracy, precision, recall, and F1-score. An important part of our study is to compare how well pretrained and self-trained versions of ResNet50 perform against VGG16 to determine which model works best for detecting fractures. Finally, acknowledge the study's weaknesses and suggest areas for future research to improve fracture detection systems.

2. # Related works
    

Table 1: Summary of Related Works

|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|Citation|Dataset|Data Size|Pre-processing|Best Model|Accuracy|Precision|F1-score|
|(Kabir et al., 2024)|Bone fracture X-ray images|17,500|Normalization, data augmentation (random rotation between -90° to -30° and 30° to 90°)|ResNet-57|96.9%|97.5%|95%|
|(Alzaid et al., 2022)|Periprosthetic Femur Fracture (PFF)|1272 X-ray images|Data augmentation (flipping, rotation, scaling), noise reduction, segmentation for ROI extraction|Resnet50 (Full Image)|90%|79%|83%|
|Resnet50 (Region of Interest (ROI))|89%|77%|74%|
|(Y. & Pramila, 2023)|Bone fracture detection X-ray images|9463 images|Train and Val datasets separated into fractured and not-fractured categories|XceptionNet|88.74%|88.45%|99.68%|
|(Pujitha et al., 2024)|X-ray images|Not stated|Grayscale conversion, Gaussian blur, normalization|VGG16|95.93%|94.44%|N/A|
|(Cangöz & Güney, 2023)|X-ray images of long bones in dogs|Original: 2028 images<br><br>Augmented: 8108 images|Data augmentation: Flipping, rotating, brightness adjustment, contrast adjustment|Inception-v3|84.5%|81.36%|N/A|

1. ## Gap Analysis
    

- How does ResNet-50 compare to VGG16 in accurately classifying X-ray images as fractured or non-fractured?
    
- Do preprocessing techniques like data augmentation, normalization and grayscale conversion improve the prediction scores of ResNet-50 and VGG16?
    
- How does the pretrained model perform as compared to the self-trained model?
    

2. ## Scope of research
    

- Evaluate and compare the accuracy, precision, recall and F1-scores of ResNet-50 and VGG16 models trained from scratch.
    
- Preprocessing like data augmentation, normalization and grayscale conversion will be implemented to investigate the effects on overall accuracy, precision, recall and F1-scores of VGG16 and ResNet50.
    
- Evaluate and compare the accuracy, precision, recall and F1-scores of pretrained and self-trained models trained from scratch.
    

3. # Methodology 
    

1. ## Dataset
    

3.1.1- Introduction to the Dataset:

Name of the Dataset: Fracture Multi-Region X-ray Dataset

Source: Kaggle (Link: [](https://www.kaggle.com/datasets/bmadushanirodrigo/fracture-multi-region-x-ray-data/data)[Bone Fracture (kaggle.com)](https://www.kaggle.com/datasets/ahmedashrafahmed/bone-fracture))

Brief Description: The dataset comprises 5431 radiographic images categorized into fractured and non-fractured images. It covers various anatomical body regions, including the lower limb, upper limb, lumbar, hips, and knees. This dataset will be used in training a model to recognize whether a certain body part is fractured or not.

3.1.2- Rationale for Selection:

Suitability: This dataset is ideal for a computer vision project aimed at developing a fracture detection model due to its variety in anatomical regions and large number of images.

Relevance: The classification of fractured versus non-fractured images directly aligns with the problem statement of identifying fractures in X-ray images.

Unique Characteristics: The diversity in anatomical regions presents a challenging task for a model to accurately classify images, enhancing the project's complexity and scope.

3.1.3- Data Features:

Categories: Fractured and non-fractured

Data Split:

Training Data: 4097 images

Validation Data: 828 images

Test Data: 506 images

3.1.4- Data Splitting:

Strategy: The dataset is pre-split into training, validation, and test sets. This split is essential to ensure the model is trained, validated, and tested on separate subsets to evaluate its performance accurately.

  

2. ## Data Preparation
    

Following are the Data Preparation techniques might be crucial for our dataset:

3.2.1- Data Cleaning

Firstly, to ensure the dataset is free of duplicate images to improve model performance and reliability. Duplicate images can bias the model and reduce its generalization capabilities. To identify duplicates, we should calculate a hash for each image file and the images with identical hashes will be considered duplicates and can be removed by keeping one copy only. A python library ‘hashlib’ might be useful for that task.

Secondly, corrupt images might be present in the dataset and can cause errors during the model training. To identify corrupted images, attempt to open each image file using the ‘PIL’ library. Images that raise errors when opened are considered corrupted and should be removed.

3.2.2- Data Normalization

Neural networks perform better when input data is normalized. This can be done by rescaling the pixel values from their original range (0 – 255) to a range of 0-1. Numpy and tensorflow libraries can be used for that. Furthermore, ensuring all images are of the same size to fit the input requirements of the neural networks (224x224 pixels for ResNet50 and VGG16 models which we will be discussing ahead).

3.2.3- Data Augmentation

Data augmentation is the process of increasing the diversity of training data artificially to improve the model’s ability to generalize to new data. Augmentation can be done by following transformation techniques:

Random Rotations: Rotate images randomly within a specific range to simulate different viewing angles, for this we can use image augmentation libraries like ‘keras.preprocessing.image’ or ‘imgaug’.

Horizontal and Vertical Flips: By flipping images horizontally and vertically to provide varied perspectives. ‘ImageDataGenerator’ from the ‘keras’ library can be one of the  implementation options.

Zooming: By Randomly zooming into images to simulate different distances from the camera. This can be applicable using ‘ImageDataGenerator’ or similar tools as well.

Shifts: Apply random horizontal and vertical shifts to images to simulate camera movements, aiding the model in learning positional invariance. Again inside ‘ImageDataGenerator”, we can use augmentation parameters like ‘width_shift_range’ and ‘height_shift_range’.

3.2.4- Data Labeling

Each image in the dataset is labeled as either ‘fractured’ or ‘non-fractured’, therefore converting the categorical labels into numerical values (e.g., 0 for ‘non-fractured’ and 1 for ‘fractured’). This can be done using label encoding methods from sklearn library, i.e., ‘sklearn.preprocessing.LabelEncoder’.

3. Models
    

3.2.1 ResNet50

ResNet50 (A variant of ResNet model) is a powerful image classification model that can be trained on complex datasets and achieve state-of-the-art results. One of its key innovations is the use of residual connections, allowing the network to learn a set of residual functions that map the input to the desired output (Kundu, N, 2023).

The reason for choosing the ResNet50 model is that it has been trained on large datasets and achieves state-of-the-art results on several benchmarks. It has been trained on the ImageNet dataset, which contains over 14 million images and 1000 classes. On this dataset, ResNet50 achieved an error rate of 22.85% which is on par with human performance, which is an error rate of 5.1% (Kundu, N, 2023). These pre-trained versions allow for effective transfer learning, which can be beneficial given the medical nature of the dataset. Moreover, the use of residual blocks helps in mitigating the vanishing gradient problem, enabling the training of deeper networks.

Architecture

ResNet50's structure is organized into four key sections: convolutional layers, identity blocks, convolutional blocks, and fully connected layers. The convolutional layers handle feature extraction from the input image, while the identity and convolutional blocks focus on processing and transforming these features. Finally, the fully connected layers perform the final classification.

The convolutional layers in ResNet50 comprise multiple convolutional layers, each followed by batch normalization and ReLU activation. These layers extract image features such as edges, textures, and shapes. They are followed by max pooling layers, which decrease the spatial dimensions of the feature maps while retaining the most crucial features.

The identity and convolutional blocks are essential components of ResNet50. The identity block passes the input through a series of convolutional layers and adds the input back to the output, enabling the network to learn residual functions that map the input to the desired output. The convolutional block, similar to the identity block, includes an additional 1x1 convolutional layer that reduces the number of filters before the 3x3 convolutional layer.

  

The final section of ResNet50 consists of fully connected layers, which are responsible for the ultimate classification. The output from the last fully connected layer goes through a softmax activation function to generate the final class probabilities.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVYCZISAG_AZXri9e-CXlN5rg6RbVFd25RLvJ-TTOQ66faW7OcEWHwhAb0WalhwzdanbxPn156xDKNZp-PnfKsDSyd6F8VFSclVMiLVsC1KgJLieeqjm69Y181Waz9zLnB_im7DRHcWiJsVvaMuXUXJhvH?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 1: ResNet50 Architecture

  

3.2.2 VGG16

VGG stands for visual geometry group, it is a standard deep Convolutional Neural Network architecture with multiple layers, here the deep refers to the number of layers with VGG16 or VGG16 variants consisting of 16 and 19 convolutional layers.

The VGG16 model has also been trained on ImageNet dataset as well which achieves almost 92.7% top-5 accuracy in ImageNet. Moreover, it was one of the most popular models submitted to ILSVRC-2014. It replaces the large kernel-sized filters with several 3x3 kernel-sized filters one after the other, hence making significant improvements over AlexNet. VGG16 model was trained using Nvidia Titan Black GPUs for multiple weeks. Furthermore, this model can classify images into 1000 object categories by having an image with an input size of 224x224 (Boesch, G, 2021).

Architecture

In general, VGGNets are based on the most essential features of convolutional neural networks (CNN). The following graphic shows the basic concept of how CNN works:

 ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDpmcz0ek1KPiTXfKe2ei1n-dKdHrEBB8RQSpTlbrXl3LR7EzSVoTQ1lHSaoqfVZT0zrs4vDbYf09sLkGmhJ4JKyJBkNUmxFMbF7eZS0SHXRUCAgEc5M8C4ZlyKdWSowMw_hrSFXfMEgrP41eKjCB8_BI8?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 2: VGG Architecture

The VGG architecture consists of four main parts:

Input: The VGGNet takes in an image input size of 224x224.

Convolutional Layers: VGG uses small receptive fields, specifically 3×3, to capture up/down and left/right movements. Additionally, 1×1 convolutions act as linear transformations of the input. Each convolution is followed by a ReLU activation function, which speeds up training by outputting the input if positive and zero otherwise. The stride is fixed at 1 pixel to maintain spatial resolution.

Hidden Layers: All the hidden layers in VGG network use ReLU. VGG does not usually leverage local response normalization (LRN) as it increases the memory consumption and training time. Moreover, it makes no improvement to overall accuracy.

Fully connected Layers: The VGGNet has three fully connected layers. VGG-16 consists of 13 convolutional layers and three fully connected layers.

VGG16 is an extensive network and has a total of around 138 million parameters. Even according to modern standards, it is a huge network even though its architecture’s simplicity is what makes the network more appealing. Just by looking at its architecture, it can be said that it is quite uniform.

There are a few convolution layers followed by a pooling layer that reduces the height and the width. If we look at the number of filters that we can use, around 64 filters are available that we can double to about 128 and then to 256 filters. In the last layers, we can use 512 filters.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAY-ui_mQkue3iLvq86csmtjAG6g4R5h4eUF4j5ZH_ti632oKN6n3ClPEmbbg-CGb0AmFeH6Wb7LbMSEtFNvLlRkUYQQk3E5i4FRG_qGlEv0HeryhDyuQwl3LLszMdmzE-QELlr8Vx60ugOlNxy8xK8z5k?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 3: VGGNet Layers

4. ## Model Evaluation
    

There are different metrics to assess the performance of image classification models(Hoque, M, 2024), the important ones of them are given below:

Accuracy, Precision, Recall and F1-score

Accuracy is the ratio of number of true predictions (TP & TN) being done by the model to the total number of predictions. The higher the accuracy score, the more likely the model is to make mostly correct predictions and vice versa.

Precision measures how many selected items are relevant while Recall measures how many relevant items are selected. Both have an inverse relationship and are often used together to evaluate model performance.

F1 score is a harmonic mean of precision and recall, providing a single metric to evaluate the balance between them.

 ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfHT7OnKMwVdYBdMQfDhHsdahuSS5bnIbkAIZ8db9ZBUWPVJim2tgTX4G2Sjes-0hcuabDVO9TxKOo-WXDfiOgzTNrtfeV6LK_3-6ABJpS_bIPQkzT_8FR7NOpqJEKM4MW1V1tIWDIBApEpmEudCFAu3EQ?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 4: Performance Metrics Formulas

  

Confusion Matrix

It is a detailed breakdown of the model’s performance, showing where the model is making errors. This tool is useful for identifying specific classes where the model is making errors. Below is an example confusion matrix of CIFAR10 dataset:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwO77cwDjruswvQuGT61IU8lXLXwr0kDEC98HzzDIKU0NeEGbS_1-pO0m2RsLLfS4mUul2wRtjGZwQ7WUSau1pOl25QBQmoifHt5v2ns4lfLjPuG1ib7qWjs98oKkw38tjfh9S-KqjO7BS6Qt2lCU1s5F1?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 5: Confusion Matrix Example

1. True Positive (TP):

-   TP values are the diagonal values of the confusion matrix, where the predicted class matches the true class.

-   For example, the TP for the "cat" class is the value in the cell where both the true class and the predicted class are "cat" (826 in your matrix).

2. False Positive (FP):

-   FP values are the sum of the values in a specific column excluding the TP value.

-   For example, for the "cat" class, FP is the sum of all values in the "cat" column except the diagonal value (sum of values: 111 + 13 + 24 + 30 + 27 + 8 + 4 + 1 + 3).

3. False Negative (FN):

-   FN values are the sum of the values in a specific row excluding the TP value.

-   For example, for the "cat" class, FN is the sum of all values in the "cat" row except the diagonal value (sum of values: 48 + 12 + 24 + 32 + 30 + 12 + 5 + 4 + 7).

4. True Negative (TN):

-   TN values are the sum of all values in the confusion matrix excluding the row and column of the specific class.

-   For example, for the "cat" class, TN is the sum of all values in the matrix excluding the "cat" row and the "cat" column. This includes all the values that are not involved in predicting or being the "cat" class.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfuHWgLC_gu6MQ3hkYuEK0aQJE6shzvhuVvNO_jMZ8ZY3LXcSSy3V09yxNcWqsN71nwNYIl0-bGsJtfDkzzuZS6L9iA74d_ifGiLutV-y6JesjDsQJBeqpZmD4YJ4ersfJmU8yrP4zkqF-IVkVsMcgj3LY?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 6: Flowchart

5. ## Summary of methodology
    

The figure above shows the summary of our proposed methodology. Once our data goes through Preparation steps including Cleaning, Normalization, Augmentation and Labeling, 2 models will be built on a prepared dataset which includes ResNet50 and VGG16. These models will be evaluated using metrics which include Accuracy, Precision, F1-score and Confusion matrix.

4. # Implementation and Results
    

1. ## Importing Dataset
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXes4YkPz1IWZzcpiHFCovl7LgVsol75R6TjKjg8ucWM9fRtA8vEVvZLya7JvxNfXM6tNeN0vA9QjmdXw-QaD7ZvMU8gTAH3omBh_UOLAGI1fuPhQvtRfpQefjrUn7iqYykwcynJaV51h-xkXHMNmizVpVs?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 7: Code for Importing Dataset

Google Drive is mounted to access the dataset stored in the directory path /content/drive/MyDrive/boneFracture/dataset. The dataset is organized into three subdirectories: train, val, and test, which correspond to the training, validation, and testing sets, respectively. Essential libraries such as TensorFlow, Keras's ImageDataGenerator for data augmentation, and VGG16, a pre-trained Convolutional Neural Network (CNN) model, are imported. Additional libraries for model building, optimization, and handling images are also included. This setup ensures a structured workflow for loading and processing image data, which is critical for the subsequent stages of model training and evaluation.

2. ## EDA
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5u7Pwkpq8nkq4GrTEyPIRO6fvOhdfjGPaULHBFHSOHbMhbPGgS7u77VkyCYYoWDyCZS4iSSOevijXFVl3S9fC7lLLe1xZS74b39T2rRWfKBOwJ5RLbs1pyW2G_tIiKKywfhnG1UKqdBmgGC7bZFyrQ_zw?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 8: Data Cleaning: Structuring Image Data into DataFrames

Figure 8 shows the code for data cleaning and preparation steps for image datasets. It defines a function, data, that processes the contents of a given dataset directory to generate a structured DataFrame. This function traverses through subdirectories, collecting image file paths and their associated labels based on subfolder names. The resulting DataFrames for the training, validation, and test datasets allow for organized and accessible data, essential for subsequent analysis and model training. By structuring the data in this manner, it becomes easier to ensure accurate labeling and efficient data handling in later stages of the project.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfU-dM9m8yivNTJOsA7KP_91SjE9UN6V41IJsAgRHlvn0n3dxPv6FGKrAuWkWI9Hb_eSLlY6wWQjxwMWYFhxTKhFzqzw0JGWq6oyrbdFt62JkTBUAZCkWXXZEpI3jpWDaphbNIdAe_303v1pd_7IsH7rCQQ?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 9: Code for Counting and Displaying Distribution of Image Classes in Training, Validation, and Test Sets

## ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfmR9iVSXuYVlIL2zpCcaJf__KOWeDYpb61qj5e5o5Nl3eanx05Rq0OXjfsId6gqtmzPM95_TYWKqm34QVJHOQB8_wArfESswdKzcn6sxx7FzqAcKmVNKoiPRYlRkrI8bxL2Baj_On3ZIAOIoJby6ahrr2w?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 10: Visualization of the Total Distribution of Fractured and Non-Fractured Images Across All Datasets

Exploratory Data Analysis (EDA) was conducted to understand the distribution of fractured and non-fractured images in the dataset. A Python function was used to count the number of images in each class within the training, validation, and test directories. Based on Figure 9, the training set distribution includes 2078 fractured and 2019 non-fractured images, the validation set has 168 fractured and 236 non-fractured images, and the test set consists of 199 fractured and 200 non-fractured images. By combining the counts from all sets, the total number of images is 2445 for the fractured class and 2455 for the non-fractured class. This distribution is visualized using a bar chart in Figure 10, which clearly shows the balance between the two classes. Ensuring a balanced dataset is crucial for training robust and accurate machine learning models.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMLqnMatoirZoiHtqAT7-7ccon1r6M0LPW5lSqctDSHBqt86WUHS7FQJumkYnrhRNOg4J2mrU3BUmDyNGxWI-7PwNmjkYEXwDjhOHxpOybE1UEuqgTi0BTevVNFpFW83-YtIqQSnnXBmcpBZQLzkCbzv6C?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 11: Displaying Sample Images

Figure 11 shows the code used to visually explore the dataset by displaying a sample of images from the training set. It first creates a large figure with a specified size to accommodate a grid of images. The loop then selects 50 random images from the dataset, displaying each one in a subplot arranged in a 10x5 grid. For each image, the code reads the image file using OpenCV, displays it using Matplotlib, and hides the axes to focus on the images themselves. Additionally, each subplot is labeled with the corresponding class name, making it easier to verify the image labels visually. This method helps in understanding the data's visual characteristics and ensuring that the images are correctly labeled and representative of the dataset.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfqYdhlpX6FfRDbzUz7fMD21GijyHsOdJiRc1_gQ5IcKBf0WMP3N26u5wlGisH9lW_dc3HjMv_PL3jKl_IA75Xfw94DWdT0C3phwQrPdCD586-LRDE6c_BmbeLBV_ha89HzTcH35LtVEHt_ltcy37f2MYPT?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 12: ImageDataGenerator Setup and Data Loading

Figure 12 shows the code on preparing image data for training a machine learning model using Keras's ImageDataGenerator. The ImageDataGenerator is initialized to rescale pixel values of images to a range between 0 and 1, which standardizes the input data and is crucial for effective training. The code then uses the flow_from_dataframe method to create data generators for training, validation, and test datasets. This method reads image file paths and their corresponding labels from a DataFrame and processes the images to a uniform size of 224x224 pixels. It also batches the images and labels, which facilitates efficient data handling during model training. The shuffle=True parameter for the training and validation generators ensures that the data is randomly shuffled, which helps the model generalize better. The results indicate that the data has been successfully loaded, with the training set containing 4097 images, the validation set 399 images, and the test set 404 images. This preparation is essential for ensuring that the data is in the correct format and structure for training and evaluating machine learning models.

3. ## Modeling 
    

1. Model 1(ResNet-50)
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcPA9Yw_AOez1pDZrUq5l9WxZurGX4kpsbHJWFi0wtruy7Cmvloe36wRtW4ZyvMFwHtFbzf-KXzL3YOh8TkP-dOmoh8Ums-YwXM5ElnRG3j4kz09gLOERMjkZMuFvnsL_CYbrEyKMv3dN0ssB-kAcGMAkw?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 13: Code Implementation for Fine-Tuning and Training the ResNet-50 Model

In Figure 13, the ResNet-50 model is implemented for bone fracture detection. The ResNet-50 model, pre-trained on the ImageNet dataset, was imported and modified for this specific task. Initially, the convolutional base layers of ResNet-50 were frozen to leverage pre-trained weights while custom top layers were added, including a Global Average Pooling layer and two Dense layers, with the final layer using a sigmoid activation for binary classification. The model was compiled using the Adam optimizer and trained on the dataset for 10 epochs. Subsequently, fine-tuning was performed by unfreezing the last 10 layers of the ResNet-50 base model and re-training with a reduced learning rate for another 10 epochs.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5VvTei4k7j1vUVaIqJBWgqQH2iFVGSW6N8x09BopIexGV9vo_kbAXneXPrMvN6DfG-UojWX1dmO1ObxOC-yqi1vrDJP0CyfAum62y2szu-Q-_31QYNcFpWiOvZNoTx4bKCGYk5xKU1m_ZYIppail81k5L?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 14: Evaluation of ResNet-50 Model

In Figure 14, the model's performance was evaluated on the test set. The evaluation yielded a test accuracy of 91.98% and a test loss of 0.1836. The classification report indicated high precision, recall, and F1-score for both classes, with the fractured class achieving a precision of 0.99 and recall of 0.85, and the non-fractured class attaining a precision of 0.87 and recall of 0.99. The confusion matrix further confirmed the model's robustness, with only a few misclassifications. Overall, the fine-tuned ResNet-50 model demonstrated strong performance metrics, including an accuracy of 91.98%, an F1 score of 0.93, a precision of 0.87, and a recall of 0.99, indicating its effectiveness in accurately identifying fractured and non-fractured images.

  

1. Summary of Model 1
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcCSsoY1a1Khxmw2Zu69ROl4fOAz919k0yMh5zO2cvqPKmtYayInvlNXP2V5aoHr7cohNuhKtPl9qip8vVtHWRpUYZwxZk_MkWBFMRjcGfj4O-xdWze54CFvirXNSHlGtlai4l8GNM39gPhUcgl6p1IoemP?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 15: Training and Validation Loss and Accuracy for Fine-Tuned ResNet Model

Figure 15 shows the code for plotting the training and validation metrics of a fine-tuned ResNet model. First, the figure dimensions are set up and subplots are created for visualizing the metrics. The first subplot displays the training and validation loss across epochs, highlighting how the model's loss decreases as training progresses. The second subplot shows the training and validation accuracy, illustrating the improvement in the model's ability to correctly classify the data. Additional subplots check for the presence of 'specificity_at_sensitivity' and 'auc' in the training history and plot them if available, allowing for a more comprehensive evaluation of the model's performance.

The training history plots demonstrate that the model's training loss decreases consistently, indicating effective learning, while the validation loss also declines, showing good generalization. The training accuracy improves steadily, reaching nearly 95%, and the validation accuracy follows a similar trend, stabilizing around 90%. These plots suggest that the fine-tuned ResNet model performs well on both training and validation data, minimizing overfitting and achieving high accuracy. This aligns with the evaluation metrics, confirming the model's robustness and effectiveness in classifying the test set accurately.

  

2. Model 2
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXejCzevFiONose9ggqS9qHdeJgEKoBtXoZ_KOnf4T_DPJi8DsZcW9gRtSpirLSxYlFLoD6ZDEG4InfvHMVjOWekIfOp8sO0FzDt9zbRSpDv-DiHKJ3qzx8wtoLAogo6m2ZHi-dWIAyVRE9mlnequbmG_iRE?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 16: Code Implementation for Fine-Tuning and Training the VGG-16 Model

In Figure 16, the VGG-16 model was implemented and fine-tuned for the task of bone fracture detection. Initially, the VGG-16 architecture was imported with pre-trained weights from ImageNet, excluding the top classification layers. To adapt the model to the specific task, the last 10 layers of the VGG-16 base were set to be trainable, allowing for fine-tuning of these layers during training. A custom Sequential model was then constructed by adding the VGG-16 base model followed by a Flatten layer, a Dense layer with 256 units and ReLU activation, and a final Dense layer with a sigmoid activation function for binary classification.

The model was compiled using the Adam optimizer with a learning rate of 0.0001 and a binary cross entropy loss function, suitable for binary classification tasks. The model was trained for 10 epochs with class weights to address any imbalances in the dataset. The training process utilized the data generators for training and validation sets, ensuring that the model was appropriately evaluated and adjusted throughout the training period.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfsjym1HRVNPQMD7yxFPqXZnnhkIKNEP3YbpoQhWMB2UsP1eMoHdG4rfMWUDmtNHQV0FuESAyvwzFYvzhtm4JiKrH2XeQFTKUl5tf0U3JokcCZvVVTd7KUcMCniK8KwvODzT1R4dnScoJwKTWgCF4x6d6E?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 17: Evaluation of VGG-16 Model 

In Figure 17, the VGG-16 model was evaluated on the test set to determine its effectiveness in classifying bone fractures. The evaluation results showed a test accuracy of 100% and a test loss of 3.6910-5, indicating that the model performed exceptionally well. Predictions were made and converted into binary labels for analysis.

  

The classification report highlighted perfect scores across all metrics: precision, recall, and F1-score were all 1.00 for both fractured and non-fractured classes. This means the model accurately identified all test samples without any errors. The confusion matrix further confirmed these results, as it showed no misclassifications—every fractured and non-fractured image was correctly identified. Overall, the VGG-16 model demonstrated excellent performance, achieving perfect accuracy, precision, recall, and F1-score, which underscores its effectiveness in distinguishing between fractured and non-fractured images.

  

1. Summary of Model 2
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcemIqKj1jSzPO6zn6P5-AU2aH2BxgveR6zxEY1hy9UeQgCP3weLGn8bOysd-v5GpRqRWSA1NPvdv2big5oXih_XVkMbRitIfJCfTqLfWUJar48jNUaR0htF1YEI6l4rVfyQTQ3WoGCvV6kqCPzG_htSE4?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 18: Training and Validation Loss and Accuracy for Fine-Tuned VGG-16 Model

The code in figure 18 shows the plotting of the training and validation metrics of a fine-tuned VGG-16 model. 

  

3. Model 3
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdSpDPMeCXuXnM6Y2ik49lxXwrX4vfIYyd74NyB2pywRmBytF_PjVo0_nNOK9VueoTglWXxReDxd21AVaU6efsKF5UY5cFGuuYJMa2RDic5s7PqlHoItcWURdeQMbJBhOv9OZMnqsY6ofWTPADRGVrP9oL?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 19: Code Implementation for Fine-Tuning and Training the Custom CNN Model

The custom Convolutional Neural Network (CNN) model is designed to classify images of bone fractures. The model architecture begins with three convolutional layers, each followed by batch normalization, max-pooling, and dropout layers to enhance feature extraction and prevent overfitting. The convolutional layers use increasing numbers of filters (32, 64, and 128) and apply ReLU activation functions to capture diverse features from the images. After the convolutional and pooling operations, the feature maps are flattened and passed through fully connected dense layers. A dropout layer with a rate of 0.5 is included before the final dense layer to further mitigate overfitting. The output layer uses a sigmoid activation function for binary classification. The model is compiled with the Adam optimizer and binary cross-entropy loss, and it is trained over 10 epochs with early stopping based on validation loss to avoid overfitting. The training process is monitored by tracking validation metrics and adjusting the model based on performance.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9eRIGEDHcADubWAl3rqGl5LOpfVWf0yaLEM_adHS-cTrj53bca4JjLzBLrrHwGhuRk_J_gACNi9KTSaOalsbd47hkeZy808YkrfdY5uUQDzTFhIMftydG2NOmY05vuveq-c4ggf6EtinsuHPI3J0xGgxO?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 20: Evaluation of Custom CNN Model

The performance of the custom CNN model was evaluated on the test set to assess its effectiveness in classifying images of bone fractures. The evaluation results revealed a test accuracy of approximately 71.18% and a test loss of 2.4148. Predictions were made on the test set, and the results were converted into binary labels using a threshold of 0.5. The classification report indicated that the model achieved a precision of 0.78 for fractured images and 0.67 for non-fractured images, with corresponding recalls of 0.58 and 0.84, respectively. The F1 scores were 0.67 for fractured and 0.75 for non-fractured images. The confusion matrix showed that the model correctly identified 116 fractured images but misclassified 83, and correctly identified 168 non-fractured images but misclassified 32. Overall, the model demonstrated a balanced performance, with a macro average F1 score of 0.71 and a weighted average F1 score of 0.71, highlighting its capability to distinguish between fractured and non-fractured images, albeit with room for improvement in precision for the fractured class.

  

1. Summary of Model 3
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMaJbLoevK31NoXYY0jIEc53caXz0rc-IqGsJ3xbIh62gO7Fvbb5pNjA60XblgNSFQxLuW_us8BFp9RAUckskCQacHmQhGQf_l2KNZHQ7hStyRICe4ZrdT6VXvx2j9ClQl0fXiT8mSNoY5_q9PnqwAYYIz?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 21: Code for visualizing confusion matrix, training and validation loss & accuracy

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAu1YKwwi0vAQyazq3PtqDEImTP47uuo9vGyeKLLa1oexq7VVr6mAPIdUTzcnRs2WjTXdN1MFP6G4MQ5_dmW4dphnVqDvDBscCpKREObXbp3k8AQZmIntY7rbCsiajbBQ_QKfK7wKJQjdA1CIeFWPjBe85?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 22: Training and Validation Loss and Accuracy

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXffbCQ2QyGddxxHfjXH9Qj_nOz7FOBieKDxkuyrEKUnnjv6Q7fD8R60t8xGY8i1uOe7cdFwvS2UqZxj7fi8Da6AW9JYojKWJnW-V3up5D5vHXGLcbnRUuugimZdKkdc9Q4ypURZbCWSa3aatC3uUW889dtN?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 23: Confusion Matrix

To assess the performance of the custom CNN model, we visualized the training and validation metrics. The plots for loss and accuracy over epochs provided insights into the model's learning process. The training and validation loss curves were plotted, revealing how the model's error decreased over the epochs. Similarly, the training and validation accuracy curves showed the improvement in classification accuracy during training. Additionally, a confusion matrix was generated to evaluate the model's performance on the test set. This matrix from Figure 23. highlighted the number of correct and incorrect predictions for each class, offering a detailed view of the model's precision and recall. The confusion matrix was visualized with color coding to distinguish between true positives, true negatives, false positives, and false negatives. This comprehensive visualization helped identify the strengths and weaknesses of the custom CNN model in distinguishing between fractured and non-fractured images.

4. ## Summary of Implementation and Results
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchmDW4t1rfwvliEFP3_tYQ3Ujd6fXF6vxaD9eyWUkG3vbqI_OPwJmghMIebHQIit50tJ-us6T7-APUnXZeDkFVz_uNUEzrgw4-jkquNQM8jWgA_mNRTf5xv6tOlLZrcyL6f9oixQhkPkvQJZe61UkMYyEZ?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 24: Code for Extracting and Visualizing Model Metrics

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbIvrz7Uob_FMpxQvct0vE1bOAmLuJxqcu8ZcQ78JqTX12i1XcQPTik_aohZgdNopcZlgM8rQYHoNoJDSl1UDaDZMHSRhd5sa6MbSJihpfExwiuy-IuJxuzcrF7_ZjmJHv3gYgWbYZzX9zUEw3PLlg7uj8?key=WXO_1jfZgwr7VNu6CctRwg)

Figure 25: Results of Model Performance Comparison

The performance of three different models: Custom CNN, VGG16, and ResNet50, was compared using various metrics. The final accuracy and loss values for each model were extracted and organized into a DataFrame for clear comparison. The Custom CNN achieved an accuracy of 99.83% and a loss of 0.0158, with a validation accuracy of 73.27% and a validation loss of 2.2317. The VGG16 model demonstrated perfect performance with an accuracy and validation accuracy of 100%, and both loss and validation loss were extremely low at 0.000016 and 0.000015, respectively. The ResNet50 model, while performing well, had an accuracy of 97.93% and a loss of 0.0895, with validation accuracy of 95.54% and validation loss of 0.1192.

Visualizations were created to compare these metrics. The accuracy comparison bar chart showed that VGG16 outperformed both the Custom CNN and ResNet50 in terms of both accuracy and validation accuracy. Similarly, the loss comparison bar chart highlighted VGG16’s superior performance, with significantly lower loss and validation loss compared to the other models. This comparison underscores the VGG16 model’s overall effectiveness in achieving higher accuracy and lower loss, followed by the Custom CNN and ResNet50.

5. # Analysis and Recommendations
    

1. ## ResNet50 Analysis
    

Architecture and Training: ResNet50 is renowned for its deep architecture with 50 layers and the use of residual connections, which help mitigate the vanishing gradient problem and allow for the training of very deep networks. The model was pre-trained on ImageNet, providing a strong foundation for transfer learning. In the study, the ResNet50 model was fine-tuned specifically for the task of fracture detection:

1. Frozen Layers: Initially, the convolutional layers were frozen to leverage the learned features from ImageNet. This approach helps in maintaining the generic features useful for image classification while focusing on training the fully connected layers for the specific task.
    
2. Unfreezing Layers: Subsequently, the last 10 layers of the convolutional base were unfrozen and fine-tuned, allowing the model to adapt more closely to the specific features of the X-ray images in the fracture dataset.
    

Performance Metrics:

- Accuracy: The test accuracy for the ResNet50 model was approximately 92%. Accuracy measures the proportion of correctly classified samples (both true positives and true negatives) among the total samples. An accuracy of 92% indicates that the model correctly identified 92 out of 100 X-ray images on average, indicating a strong ability to distinguish between fractured and non-fractured X-rays. This metric is crucial as it reflects the overall effectiveness of the model in correct classification.
    
- Precision: Precision for the ResNet50 model was 0.86. Precision measures the proportion of true positive predictions among all positive predictions. A precision of 0.86 means that 86% of the images the model identified as fractures were indeed fractures. The precision metric was high, suggesting that the model had a low false-positive rate. This is important in medical diagnostics where false positives can lead to unnecessary treatments.
    
- Recall: The recall for the ResNet50 model was 0.99. Recall measures the proportion of true positive predictions among all actual positive cases. A recall of 0.99 indicates that the model successfully identified 99% of all actual fracture cases in the dataset, demonstrating its effectiveness in capturing true fracture instances. In other words, high recall implies that the model is effective in detecting actual fractures, minimizing the risk of missing true positive cases.
    
- F1-Score: The F1-score for the ResNet50 model was 0.93. The F1-score is the harmonic mean of precision and recall, providing a balance between the two. An F1-score of 0.93 indicates a high level of accuracy in both identifying true positives and minimizing false negatives. The F1-score, which balances precision and recall, was also robust, indicating a well-rounded performance.
    

  

Confusion Matrix: 

The confusion matrix for ResNet50 showed the following values:

- True Positives (TP): 169
    
- True Negatives (TN): 198
    
- False Positives (FP): 30
    
- False Negatives (FN): 20
    

  

True Positives (TP): These are cases where the model correctly predicted the positive class. For ResNet50, TP = 169 means that the model correctly identified 169 instances as positive.

True Negatives (TN): These are cases where the model correctly predicted the negative class. For ResNet50, TN = 198 means that the model correctly identified 198 instances as negative.

False Positives (FP): These are cases where the model incorrectly predicted the positive class. For ResNet50, FP = 30 means that the model incorrectly identified 30 instances as positive when they were actually negative.

False Negatives (FN): These are cases where the model incorrectly predicted the negative class. For ResNet50, FN = 20 means that the model incorrectly identified 20 instances as negative when they were actually positive.

The confusion matrix is crucial for understanding the model's strengths and weaknesses. True positives and true negatives reflect the correct classifications, while false positives and false negatives indicate the model's errors. For ResNet50, the low numbers of false positives and false negatives highlight its robustness in fracture detection.

  

Training & Validation Loss:

Train Loss: The train loss for ResNet50 decreased consistently over the epochs, indicating that the model was effectively learning the features relevant to fracture detection from the training data. Lower train loss signifies that the model's predictions were getting closer to the actual labels as the training progressed.

Validation Loss: The validation loss for ResNet50 also decreased over the epochs, but at a slower rate compared to the training loss. This decrease in validation loss suggests that the model was generalizing well to the unseen validation data. Lower validation loss signifies that the model's predictions were getting closer to the actual labels as the training progressed. However, if the validation loss starts to increase after a certain point, it might indicate overfitting, where the model performs well on the training data but poorly on new, unseen data.

The consistent decrease in both train and validation loss for ResNet50 suggests effective learning and good generalization to the validation set. The model was able to minimize errors on both the training and validation datasets, indicating a well-balanced training process.

  

Train & Validation Accuracy:

- Train Accuracy: The train accuracy for ResNet50 increased steadily over the epochs, reaching a high value towards the end of training. This indicates that the model was correctly classifying an increasing number of images from the training set as it learned more features.
    
- Validation Accuracy: The validation accuracy for ResNet50 also showed a steady increase, reflecting the model's ability to generalize the learned features to unseen data. High validation accuracy indicates that the model is not just memorizing the training data but is able to make accurate predictions on new data.
    

The steady increase in both train and validation accuracy for ResNet50 signifies effective learning and good generalization. The model's performance on the validation set closely mirrors its performance on the training set, indicating that it is not overfitting. The high values of train and validation accuracy towards the end of training demonstrate the model's robustness and reliability in fracture detection.

  

2. ## VGG16 Analysis
    

Architecture and Training: VGG16, characterized by its simpler yet deep architecture with 19 layers, was also utilized for this task. Known for its uniform structure, VGG16 provides a contrasting architecture to ResNet50, allowing for comparative analysis:

1. Custom Top Layer: The top layer of VGG16 was replaced to suit the binary classification task of fracture detection.
    
2. Fine-Tuning: Similar to ResNet50, VGG16 was fine-tuned after an initial training phase with frozen convolutional layers to adapt the pre-trained features to the specific dataset.
    

  

Performance Metrics:

Accuracy: The test accuracy for the VGG16 model was approximately 100%. This indicates that the model correctly classified 100 out of 100 X-ray images on average, demonstrating its overall effectiveness.

Precision: The precision for the VGG16 model was 1.00. Precision measures the proportion of true positive predictions among all positive predictions. A precision of 1.00 means that 100% of the images the model identified as fractures were indeed fractures, showing the model's reliability in predicting fractures.

Recall: The recall for the VGG16 model was 1.00. Recall measures the proportion of true positive predictions among all actual positive cases. A recall of 1.00 indicates that the model successfully identified 100% of all actual fracture cases in the dataset, reflecting its effectiveness in capturing true fracture instances.

F1-Score: The F1-score for the VGG16 model was 1.00. The F1-score is the harmonic mean of precision and recall, providing a balance between the two. An F1-score of 1.00 indicates that the model maintains good accuracy in both identifying true positives and minimizing false negatives.

  

Confusion Matrix: 

The confusion matrix for VGG16 showed the following values:

- True Positives (TP): 199
    
- True Negatives (TN): 200
    
- False Positives (FP): 0
    
- False Negatives (FN): 0
    

  

True Positives (TP): These are cases where the model correctly predicted the positive class. For VGG16 , TP = 199 means that the model correctly identified 199 instances as positive.

True Negatives (TN): These are cases where the model correctly predicted the negative class. For VGG16 , TN = 200 means that the model correctly identified 200 instances as negative.

False Positives (FP): These are cases where the model incorrectly predicted the positive class. For VGG16 , FP = 0 means that the model incorrectly identified 0 instances as positive when they were actually negative.

False Negatives (FN): These are cases where the model incorrectly predicted the negative class. For VGG16 , FN = 0 means that the model incorrectly identified 0 instances as negative when they were actually positive.

The confusion matrix is crucial for understanding the model's strengths and weaknesses. True positives and true negatives reflect the correct classifications, while false positives and false negatives indicate the model's errors. For VGG16 , the 0 of false positives and false negatives highlight its robustness in fracture detection.

  

Train & Validation Loss:

Train Loss: The train loss of VGG16 has consistently decreased across multiple epochs, showing that the model is effectively learning features related to fracture detection in the training data. Lower training loss means that the model's predictions become increasingly consistent with real labels.

Validation loss: The Validation loss of VGG16 also decreased over several epochs. This indicates that the model is generalizing well even for invisible verification data.

The reduction of both train and validation losses for VGG16 indicates effective learning and good generalization.

Train & Validation Accuracy:

Train Accuracy: The train accuracy for VGG16 increased steadily over the epochs, reaching high values towards the end of the training process, similar to ResNet50.

Validation Accuracy: The validation accuracy for VGG16 also increased steadily. This indicates good generalization, though not as strong as ResNet50.

The increase in both train and validation accuracy for VGG16 suggests effective learning and reasonable generalization. The high values of train accuracy and reasonably high validation accuracy demonstrate that VGG16 is a reliable model for fracture detection.

  

3. ## Custom CNN model
    

Model Architecture and Design:

The custom CNN model was designed with multiple convolutional layers followed by max-pooling layers, fully connected layers, and a softmax output layer. The design was aimed at capturing relevant features from X-ray images to effectively classify fractures.

- Convolutional Layers: These layers extract feature maps from the input images using various filters. The number of filters, filter size, and activation functions used in each convolutional layer are crucial parameters that affect the model's performance.
    
- Pooling Layers: Max-pooling layers reduce the spatial dimensions of the feature maps, retaining the most important information while reducing computational complexity.
    
- Fully Connected Layers: These layers combine the features learned by the convolutional layers to make final classification decisions.
    
- Output Layer: The softmax output layer provides probability scores for each class (fractured or non-fractured), facilitating classification.
    

  

Performance Metrics:

Accuracy: A test accuracy of 71% means that the model correctly classified 71% of the X-ray images in the test set. This indicates that the model correctly classified 71 out of 100 X-ray images on average. While this is reasonable performance, there is significant room for improvement compared to pre-trained models like ResNet50 and VGG16, which often achieve higher accuracy.

Precision: Precision for the Custom model was 0.66. This means that 66% of the images predicted as fractures were actually fractures. This relatively low precision indicates that the model has a higher rate of false positives, which could lead to unnecessary further medical examinations or treatments.

Recall: The recall for the custom model was 0.84. A recall of 0.84 means that the model correctly identified 84% of all actual fracture cases. High recall is essential in medical diagnostics to reduce the number of missed diagnoses; however, this often results in a trade-off with precision in the model.

F1-Score: The F1-score for the custom model was 0.74. An F1-score of 0.74 indicates a reasonable balance, but the relatively low precision suggests the model makes a fair number of false positive predictions.

  

Confusion Matrix:

The confusion matrix for Custom CNN model showed the following values:

- True Positives (TP): 116
    
- True Negatives (TN): 168
    
- False Positives (FP): 83
    
- False Negatives (FN): 32
    

True Positives (TP): 116 cases where the model correctly identified a fracture.

True Negatives (TN): 168 cases where the model correctly identified no fracture.

False Positives (FP): 83 cases where the model incorrectly identified a fracture (false alarms).

False Negatives (FN): 32 cases where the model missed an actual fracture.

The confusion matrix highlights a high number of false positives, which aligns with the lower precision value. The false negatives are fewer, indicating the model is fairly effective at detecting actual fractures (high recall).

  

Train & Validation Loss: 

- Train Loss: The train loss indicates that the model quickly achieves a low error rate on the training set and maintains it consistently. This stability suggests that the model is effectively learning the patterns in the training data without overfitting. The consistently low training loss compared to the validation loss suggests potential overfitting in the early epochs. The model might be capturing noise and specific patterns in the training data that do not generalize well to the validation set.
    
- Validation Loss: The sharp increase in the validation loss at the beginning indicates that the model struggles to generalize from the training data to the validation data initially. This could be due to several factors, such as an initial high learning rate or the model requiring more epochs to adjust to the validation data. The validation loss peaks around the second epoch and then decreases sharply. This trend suggests that after a brief period of overfitting, the model starts to generalize better as training progresses. The model appears to adjust and learn more generalized features that improve its performance on the validation set.
    

  

Train & Validation Accuracy: 

- Train Accuracy: The training accuracy starts below 0.8, indicating the model initially misclassifies a significant number of training examples. There is a rapid increase in accuracy within the first few epochs, suggesting that the model is quickly learning the patterns in the training data. After the initial sharp increase, the training accuracy plateaus around 1.0, meaning the model has nearly perfect performance on the training data. This plateau suggests that the model has effectively memorized the training data.
    
- Validation Accuracy: The validation accuracy starts at approximately 0.6, indicating the model initially has a moderate ability to generalize to unseen data. The validation accuracy shows some variability, reflecting how well the model performs on different batches of validation data. This fluctuation suggests the model's performance is inconsistent on new data. Despite fluctuations, there is a general upward trend in validation accuracy, reaching its peak around the 7th epoch. After peaking, there is a slight decline, indicating the model might be beginning to overfit as training continues.
    

  

4. ## Comparative Analysis
    

Performance Metrics:

- Accuracy: VGG16 (100%) > ResNet50 (92%) > Custom CNN (71%)
    
- Precision: VGG16 (1.00) > ResNet50 (0.86) > Custom CNN (0.66)
    
- Recall: VGG16 (1.00) > ResNet50 (0.99) > Custom CNN (0.84)
    
- F1-Score: VGG16 (1.00) > ResNet50 (0.93) > Custom CNN (0.74)
    
- Confusion Matrix: VGG16 has 0 false positives and false negatives.
    

These results indicate that VGG16 is generally more reliable and robust for automated bone fracture detection from X-ray images. The higher accuracy, precision, recall, and F1-score of ResNet50 suggest that it can provide more accurate and efficient fracture detection, contributing to advancements in medical imaging diagnostics and improved patient care.

  

Train & Validation Loss:

- ResNet50: The train and validation also decreased consistently, but the validation loss was slightly higher than that of VGG16, suggesting a bit more overfitting compared to VGG16.
    
- VGG16: The train and validation loss decreased consistently, with the validation loss closely following the training loss, indicating strong generalization and minimal overfitting.
    
- Custom CNN: The model quickly learns the training data well, as shown by the low and stable train loss. However, this could mean it's overfitting, as the validation loss is higher in early epochs. The validation loss was initially high, indicating poor generalization. It improves after peaking around the second epoch, suggesting the model starts to generalize better after initially overfitting.
    

  

Train & Validation Accuracy:

- ResNet50: The train and validation accuracy increased steadily, but the validation accuracy was slightly lower than the train accuracy, indicating good but not as strong generalization as VGG16.
    
- VGG16: The train and validation accuracy increased steadily, with the validation accuracy closely matching the train accuracy, indicating effective learning and strong generalization.
    
- Custom CNN: Train Accuracy rapidly improves from below 0.8 to near-perfect (1.0), showing quick learning. Validation Accuracy starts around 0.6, indicating moderate generalization. It fluctuates but generally improves, peaking around the 7th epoch. A slight decline afterward suggests possible overfitting.
    

These results indicate that VGG16 is generally more reliable and robust for automated bone fracture detection from X-ray images. The higher accuracy, precision, recall, and F1-score of VGG16 suggest that it can provide more accurate and efficient fracture detection, contributing to advancements in medical imaging diagnostics and improved patient care. The analysis of train loss, validation loss, train accuracy, and validation accuracy reveals that both ResNet50 and VGG16 models are effective in learning from the training data and generalizing to the validation data. However, VGG16 demonstrates slightly better generalization capabilities and robustness, with lower validation loss and higher validation accuracy compared to ResNet50. These findings suggest that VGG16 is more reliable for automated bone fracture detection from X-ray images, although ResNet50 also performs well with minor room for improvement in its generalization capabilities. The custom CNN model demonstrates moderate performance in detecting bone fractures from X-ray images. However, its higher test loss, lower test accuracy, and lower precision compared to pre-trained models like ResNet50 and VGG16 indicate that it is less reliable and effective. The high recall value is promising, but the overall performance metrics suggest a need for further optimization and tuning of the custom CNN architecture to improve its generalization and reduce false positives. Enhancing the model's ability to generalize and accurately classify fractures is essential for its application in medical diagnostics.

  
  

5. ## Recommendations for Further Improvement
    

To enhance the performance and applicability of the ResNet50 and VGG16 models for bone fracture detection, several recommendations can be considered:

#### Ensemble Methods

- Combining Models: Creating an ensemble of ResNet50 and VGG16 can leverage the strengths of both architectures. By averaging predictions or using a weighted approach, the ensemble can potentially improve accuracy and robustness.
    
- Model Diversity: Including additional models with different architectures in the ensemble can further enhance performance by capturing diverse feature representations.
    

  

#### Data Augmentation

- Extensive Augmentation: Applying more extensive data augmentation techniques, such as rotation, zoom, shift, and flip, can help in making the models more robust to variations in X-ray images.
    
- Synthetic Data: Generating synthetic data through techniques like GANs (Generative Adversarial Networks) can expand the dataset, providing more training examples and improving model generalization.
    

  

#### Hyperparameter Tuning

- Grid Search and Random Search: Conducting comprehensive hyperparameter tuning using grid search or random search can identify the optimal configurations for learning rate, batch size, and other parameters.
    
- Automated Tuning: Utilizing automated hyperparameter tuning methods like Bayesian optimization can efficiently explore the hyperparameter space and find the best settings for model performance.
    

  

#### Cross-Validation

- K-Fold Cross-Validation: Implementing k-fold cross-validation can provide more reliable performance estimates and help in understanding model variance and stability.
    
- Stratified Sampling: Ensuring stratified sampling in cross-validation can maintain the distribution of classes in each fold, providing a more accurate assessment of model performance.
    

  

6. ## Social Impacts and Ethical Issues
    

The deployment of automated fracture detection systems in medical imaging has profound social implications and ethical considerations:

#### Social Impacts:

- Enhanced Diagnostic Accuracy: Automated systems can significantly enhance diagnostic accuracy, reducing human error and ensuring timely and precise treatment for patients. This can lead to improved patient outcomes and a higher standard of care in medical facilities.
    
- Increased Accessibility: Such technologies can be particularly beneficial in underserved areas where access to skilled radiologists is limited. Automated systems can provide reliable diagnostic support, bridging the gap in healthcare disparities.
    

  

#### Ethical Issues:

- Data Privacy: The use of patient data in training these models raises concerns about privacy and data security. Ensuring that data is anonymized and securely stored is paramount to maintaining patient confidentiality.
    
- Bias and Fairness: There is a risk of inherent biases in the training data, which can lead to skewed results in certain demographic groups. Continuous monitoring and updating of the models are necessary to ensure fairness and equity in diagnostic outcomes.
    
- Dependence on Technology: While these systems can assist radiologists, over-reliance on automated diagnostics could lead to complacency among healthcare professionals. It is crucial to maintain a balance where technology aids but does not replace human expertise.
    

7. ## Limitations 
    

1. Limited Variability: The Fracture Multi-Region X-ray Dataset from Kaggle, although comprehensive, might not encompass the full spectrum of fracture types and patient demographics. This limitation can affect the model's ability to generalize to different types of fractures or to images from diverse patient populations.
    
2. Dataset Imbalance: If the dataset contains an imbalance between fractured and non-fractured samples, the models may become biased towards the majority class. This could lead to lower recall for the minority class (fractured cases), which is critical in medical diagnostics.
    
3. Synthetic Scenarios: The dataset might not fully capture the variability found in real-world clinical scenarios, such as varying image quality, different radiographic techniques, or the presence of other medical conditions. This can limit the models' performance when deployed in actual clinical settings.
    
4. Training Data Specificity: While the models show good performance on the given dataset, there is always a risk of overfitting to the training data, particularly if the dataset is not sufficiently diverse. Overfitting can reduce the model's ability to generalize to new, unseen data.
    
5. Compatibility Issues: Integrating the models into existing medical imaging systems can pose challenges. Compatibility with different software and hardware platforms, as well as adherence to medical imaging standards (e.g., DICOM), is necessary for seamless deployment.
    

  
  
  
  
  
  
  

6. # Conclusions 
    

This report demonstrates that bone fracture can be diagnosed and classified with the help of ResNet50 and VGG16 architectures implementing the data from Kaggle. We first trained models from scratch to get ResNet50 and VGG16 models. Then, transfer learning was done on the architectures with pre-weights from the imageNet dataset and ordinary classifiers were defined. Finally, the models were adapted by making some layers trainable, mainly during the final stages of feature extraction and the use of custom classifiers. The highest rate was observed for a model with the name VGG16, test accuracy =1; precision=1, recall = 1, F1-score = 1. 00. At the same time, successful training was achieved with ResNet50 with the test accuracy of 92% and the precision of 0. 86, recall of 0. 99, recall of 0. 93. Such models can be used on data that they have never even encountered before because their performance scores portray strong and stable characteristics. Yet, it is suggested to work on the improvement of the models, including the problems of data imbalance and overfitting of the models. In future work, specific efforts will be directed to the activation of intervention techniques for coping with data imbalance, random data shuffling inhibition, and increased epochs for the models’ better overall performance and generalization. The encouraging outcomes of this research convey the necessity of deep learning methods in enhancing diagnostic procedures and thus enhancing the quality of medical treatment.

7. # References 
    

Alzaid, A., Wignall, A., Dogramadzi, S., Pandit, H., & Xie, S. Q. (2022). Automatic detection and classification of peri-prosthetic femur fracture. International Journal of Computer Assisted Radiology and Surgery, 17(4), 649–660. [https://doi.org/10.1007/s11548-021-02552-5](https://doi.org/10.1007/s11548-021-02552-5) 

Cangöz, G. B., & Güney, S. (2023). The effects of the traditional data augmentation techniques on long bone fracture detection. Bilge International Journal of Science and Technology Research, 7(1), 63–69. [https://doi.org/10.30516/bilgesci.1128622](https://doi.org/10.30516/bilgesci.1128622) 

Dharmaraj. (2022). Image classification and prediction using transfer learning. Medium. [https://medium.com/@draj0718/image-classification-and-prediction-using-transfer-learning-3cf2c736589d](https://medium.com/@draj0718/image-classification-and-prediction-using-transfer-learning-3cf2c736589d) 

Dilmegani, C. (2023). What is Data Augmentation? Techniques & Examples in 2024. AIMultiple: High Tech Use Cases &Amp; Tools to Grow Your Business. [https://research.aimultiple.com/data-augmentation/](https://research.aimultiple.com/data-augmentation/) 

Gandhi, A. (2024). Data Augmentation | How to use Deep Learning when you have Limited Data. Nanonets Intelligent Automation, and Business Process AI Blog. [https://nanonets.com/blog/data-augmentation-how-to-use-deep-learning-when-you-have-limited-data-part-2/](https://nanonets.com/blog/data-augmentation-how-to-use-deep-learning-when-you-have-limited-data-part-2/) 

Pujitha B., Raga Sravya K., Krishnasai N. and Aparna C. (2024) "Detection of Bone Fracture Using Deep Learning," 2024 International Conference on Emerging Systems and Intelligent Computing (ESIC), Bhubaneswar, India, 2024, pp. 703-708, doi: 10.1109/ESIC60604.2024.10481535. [https://ieeexplore.ieee.org/abstract/document/10481535](https://ieeexplore.ieee.org/abstract/document/10481535) 

Kabir, M., Tahiti T. J., & Prome, T.A. (2024) "A Comparative Study of Certain Convolutional Neural Network Architectures for X-ray Image Analysis in Bone Fracture Detection and Identification," 2024 International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA), Victoria, Seychelles, 2024, pp. 1-8, doi: 10.1109/ACDSA59508.2024.10468017. [https://ieeexplore.ieee.org/abstract/document/10468017](https://ieeexplore.ieee.org/abstract/document/10468017) 

Meng, X. H., Wu, D. J., Wang, Z., Long, X., MA, Dong, X. M., Liu, A. E., & Chen, L. (2021). A fully automated rib fracture detection system on chest CT images and its impact on radiologist performance. Skeletal Radiology, 50(9), 1821–1828. [https://doi.org/10.1007/s00256-021-03709-8](https://doi.org/10.1007/s00256-021-03709-8) 

Y., T., & Pramila, P. V. (2023). Detection of Bone Fractures in Upper Extremities Using XceptionNet and Comparing the Accuracy with Convolutional Neural Network. In Proceedings of the 1st International Conference on Artificial Intelligence for Internet of Things: Accelerating Innovation in Industry and Consumer Electronics (AI4IoT 2023) (pp. 360-366). SCITEPRESS. [https://www.scitepress.org/Papers/2023/127723/127723.pdf](https://www.scitepress.org/Papers/2023/127723/127723.pdf)

Yadav, D. P., Sharma, A., Athithan, S., Bhola, A., Sharma, B., & Dhaou, I. B. (2022). Hybrid SFNET model for bone fracture detection and classification using ML/DL. Sensors, 22(15), 5823. [https://doi.org/10.3390/s22155823](https://doi.org/10.3390/s22155823) 

  

Ahmad, M. (2023). Comparison and Architecture of Pre-Trained Models (AlexNet, VGG-16, VGG-19, ResNet, GoogleNet, Inception).  [https://medium.com/@muradatcorvit23/comparison-and-architecture-of-pre-trained-models-alexnet-vgg-16-vgg-19-resnet-googlenet-05f83214fc47](https://medium.com/@muradatcorvit23/comparison-and-architecture-of-pre-trained-models-alexnet-vgg-16-vgg-19-resnet-googlenet-05f83214fc47)

  

Hoque, M., 2024. How to Evaluate An Image Classification Model. Clarifai Guide. [https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model/](https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model/)

Kundu, N., 2023. Exploring ResNet50: An In-Depth Look at the Model Architecture and Code Implementation. Medium. [https://medium.com/@nitishkundu1993/exploring-resnet50-an-in-depth-look-at-the-model-architecture-and-code-implementation-d8d8fa67e46f](https://medium.com/@nitishkundu1993/exploring-resnet50-an-in-depth-look-at-the-model-architecture-and-code-implementation-d8d8fa67e46f)

  

Boesch, G., 2021. Very Deep Convolutional Networks (VGG) Essential Guide. Viso.ai, 6 October. Available at: [https://viso.ai/deep-learning/vgg-very-deep-convolutional-networks/](https://viso.ai/deep-learning/vgg-very-deep-convolutional-networks/)**