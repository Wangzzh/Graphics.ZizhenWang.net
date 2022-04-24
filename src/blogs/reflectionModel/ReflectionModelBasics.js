import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Markdown } from '../../components/Markdown';

export function ReflectionModelBasics() {
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" align='center' gutterBottom>Reflection Model Basics</Typography>
                <br/>
                <Markdown markdown={m1}/>
            </Container>
        </>
    )
}

const m1 = `
When light is incident on a surface, the surface will scatter the incident light, and reflects portion of the light back to the environment. To model this reflection, we need to describe two main attributes: 

- The spectral distribution, which usually simplifis to RGB channels
- The directional distribution.

### Bidirectional Reflectance Distribution Function (BRDF)

The *bidirectional reflectance distribution function* (BRDF) gives a formulation for describing reflectance. The BRDF function

$$
f_r(p, \\omega_i, \\omega_o)
$$

where $\\omega_i$ is incident light direction, and $\\omega_o$ is reflected light direction, determines how light is scattered at a point $p$ on surface. Physically based BRDFs should have two qualities.

- Reciprocity: the BRDF should stay same when we switch input and output direction.
$$
f_r(p, \\omega_i, \\omega_o)=f_r(p, \\omega_i, \\omega_o)
$$

- Energy conservation: total light reflected should be smaller than incident light.
$$
\\int f_r(p, \\omega_i, \\omega)\\cos\\theta d\\omega\\leq 1
$$
where $\\theta=\\omega\\cdot \\vec{n}$ is the incident angle.

Similarly we can define *bidirectional transmittance distribution function* (BTDF) to describe sub surface transmittance. For convenience, we consider BRDF and BTDF together as $f(p, \\omega_i, \\omega_o)$, which is named *bidirectional scattering distribution function* (BSDF).


### Specular reflection

For a perfect specular reflection and refraction of an incident light, there is only one posible outgoing direction. For reflection, outgoing angle is equal to incoming angle,
$$
\\theta_i = \\theta_o
$$
And for refraction, the angle follows Snell's law.
$$
\\eta_i\\sin\\theta_i = \\eta_t\\sin\\theta_t
$$

To compute the Fresnel reflectance at two dielectric media, we take the indices of refraction of the two media, and calculate

$$
r_\\parallel = \\frac{\\eta_t\\cos\\theta_i - \\eta_i\\cos\\theta_t}{\\eta_t\\cos\\theta_i + \\eta_i\\cos\\theta_t}
$$
$$
r_\\perp = \\frac{\\eta_i\\cos\\theta_i - \\eta_t\\cos\\theta_t}{\\eta_i\\cos\\theta_i + \\eta_t\\cos\\theta_t}
$$
where $r_\\parallel$ is the Fresnel reflectance for parallel polarized light and $r_\perp$ is for perpendicular polarized light. $\\eta_i$ and $\\eta_t$ are indices of refractions and $\\theta_i$ and $\\theta_t$ and incident and refraction angles.

For unpolarized light, the total Fresnel reflectance is
$$
F_r = \\frac{1}{2}(r_\\parallel^2+r_\\perp^2)
$$
And because of conservation of energy, refraction is $1-F_r$.

For specular reflection, we can thus form the BRDF.
$$
f_r(p, \\omega_o, \\omega_i) = F_r(\\omega_r)\\frac{\\delta(\\omega_i-\\omega_o)}{|\\cos\\theta_r|}
$$
`