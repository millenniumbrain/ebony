import cv2
import numpy as np
from sklearn.cluster import KMeans
from PIL import Image, ImageFont, ImageDraw, ImageEnhance

cluster_count = 100
offset = 1

def img_resize(img, width=None, height=None, inter=cv2.INTER_AREA):
    dim = None
    (h, w) = img.shape[:2]

    if width is None and height is None:
        return img
    if width is None:
        r = height / float(h)
        dim = (int(w * r), height)
    else:
        r = width / float(w)
        dim = (width, int(h * r))
    resized = cv2.resize(img, dim, interpolation=inter)
    return resized
    

# Courtesy of https://www.pyimagesearch.com/2014/05/26/opencv-python-k-means-color-clustering/
def centroid_histogram(clusters):
    # grab the number of different clusters and create a histogram
    # based on the number of pixels assigned to each cluster
    numLabels = np.arange(0, len(np.unique(clusters.labels_)) + 1)
    (hist, _) = np.histogram(clusters.labels_, bins=numLabels)
    # normalize the histogram, such that it sums to one
    hist = hist.astype("float")
    hist /= hist.sum()
    # return the histogram
    return hist

class RGBColor:
    def __init__(self, red = 0, green = 0, blue = 0):
        self.red = red
        self.green = green
        self.blue = blue

def clamp(x):
    return max(0, min(x, 255))

imagePath = u"chance.jpg"

image = cv2.imread(imagePath)
imageCopy = img_resize(cv2.cvtColor(image, cv2.COLOR_BGR2RGB), width=int(image.shape[1]/10), height=int(image.shape[0]))
pixelImage = imageCopy.reshape((imageCopy.shape[0] * imageCopy.shape[1], 3))

clusters = KMeans(n_clusters=cluster_count+offset)
clusters.fit(pixelImage)


centroids = sorted(clusters.cluster_centers_, key=lambda x: sum(x))

centroids = centroids[offset:]

# create image with size (100,100) and black background
button_img = Image.new('RGB', (25,25), "black")

# put text on image
draw = ImageDraw.Draw(button_img)


count = 0
for row in centroids:
    r = int(round(row[0]))
    g = int(round(row[1]))
    b = int(round(row[2]))
    rgbcolor = "#{0:02x}{1:02x}{2:02x}".format(clamp(r), clamp(g), clamp(b))
    print(u"Red: {} Green: {} Blue: {}".format(r, g, b))
    #top_left = 
    draw.rectangle([0, 0, 25, 25], fill=rgbcolor)
    count = count + 1
    # save in new file
    button_img.save("output/output{}.jpg".format(count), "JPEG")


