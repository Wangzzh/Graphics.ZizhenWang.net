import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Markdown } from '../../components/Markdown';

export function ColorSpace() {
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" align='center' gutterBottom>Color Space</Typography>
                <br/>
                <Markdown markdown={m1}/>
            </Container>
        </>
    )
}

const m1 = `

## Cone Response and LMS Space

There are three types of cones in human eyes, L (Long), M (Medium) and S (Short), which are roughly mapped to red, green and blue lights. The response of a cone to some light stimuli is not evenly distributed across all wavelengths. The sensitivity of each cone to different wavelength of lights is plotted below.

![lms color matching functions](/colorSpace/lms.png)


The actual response to a stimulus with some input spectral $\\Phi(\\lambda)$ is calculated by integration. Use L cone as example.

$$
L = \\int_\\lambda \\Phi(\\lambda)l(\\lambda)d\\lambda
$$

M cone and S cone responses are calculated similarly.

## XYZ Space

XYZ space is a widely used color space defined by CIE. It is calculated by a linear transformation from LMS color space.

$$
\\begin{bmatrix}
L \\\\ M \\\\ S
\\end{bmatrix} = 
\\begin{bmatrix}
0.38971 & 0.68898 &-0.07868\\\\
-0.22981 &1.18340 &0.04641\\\\
0 &0 &1
\\end{bmatrix}
\\begin{bmatrix}
X \\\\ Y \\\\ Z
\\end{bmatrix}
$$

The approximated color matching functions of XYZ are shown below.

![xyz color matching functions](/colorSpace/xyz.png)

In the XYZ color space, Y is designed such that it matches roughly the luminance of a color.

## xy chromaticity diagram

Since the Y value of the XYZ color space is a measure of luminance of color, we can chromaticity using two parameters x and y after normalizing.

$$
x = \\frac{X}{X+Y+Z}\\qquad y = \\frac{Y}{X+Y+Z}
$$

The chromaticity diagram is obtained by plotting the x and y values at each wavelength.

![xyz color matching functions](/colorSpace/chromaticity.png)

## RGB Space

RGB Color space is also a linear transform from the LMS or XYZ color space. The transformation from XYZ to RGB is shown below.

$$
\\begin{bmatrix}
R \\\\ G \\\\ B
\\end{bmatrix} = 
\\begin{bmatrix}
2.36461 &-0.89654 &-0.46807\\\\
-0.51517 &1.42640 & 0.08875\\\\
0.00520 &-0.01441 &1.00920
\\end{bmatrix}
\\begin{bmatrix}
X \\\\ Y \\\\ Z
\\end{bmatrix}
$$

The RGB color matching functions are chosen so that they are matching the color of single wavelength stimulus at 435.8, 546.1 and 700 nm.

![rgb color matching functions](/colorSpace/rgb.png)

We can plot the RGB space in the xy chromaticity diagram. It will be a triangular space with rgb as 3 vertices. In the center of the triangle is the white point, where rgb valus are equal, and xyz values are also equal, at (1/3, 1/3).

![rgb color matching functions](/colorSpace/rgb_xy.png)

---

## Demo Repository

Python code for plotting all diagrams (requires numpy and matplotlib).

[https://github.com/Wangzzh/Demo-ColorSpace](https://github.com/Wangzzh/Demo-ColorSpace)

---

## Reference

- Fundamentals of Computer Graphics, third edition. Chapter 21.
- [https://en.wikipedia.org/wiki/LMS_color_space](https://en.wikipedia.org/wiki/LMS_color_space)
- [https://en.wikipedia.org/wiki/CIE_1931_color_space](https://en.wikipedia.org/wiki/CIE_1931_color_space)

`