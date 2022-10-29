//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    subdivisions = Math.max(subdivisions, 1);
    // fill in your code here.
    // delete the code below first.

    step_count = 1.0/subdivisions;
    for( i = 0; i < subdivisions; i++){
        u0 = i * step_count - 0.5;
		u1 = (i + 1) * step_count - 0.5;
        for( j = 0; j < subdivisions; j++ ){
            v0 = j * step_count - 0.5;
		    v1 = (j + 1) * step_count - 0.5;
            addTriangle(u0, v0, 0.5, u1, v0, 0.5, u0, v1, 0.5);
			addTriangle(u0, v1, 0.5, u1, v0, 0.5, u1, v1, 0.5);
            addTriangle(u1, v0, -0.5, u0, v0, -0.5, u0, v1, -0.5);
			addTriangle(u1, v0, -0.5, u0, v1, -0.5, u1, v1, -0.5);
            addTriangle(u1, -0.5, v0, u0, -0.5, v1, u0, -0.5, v0);
			addTriangle(u1, -0.5, v0, u1, -0.5, v1, u0, -0.5, v1);
            addTriangle(0.5, u1, v0, 0.5, u0, v1, 0.5, u0, v0);
			addTriangle(0.5, u1, v0, 0.5, u1, v1, 0.5, u0, v1);
            addTriangle(u0, 0.5, v1, u1, 0.5, v0, u0, 0.5, v0);
			addTriangle(u1, 0.5, v1, u1, 0.5, v0, u0, 0.5, v1);
            addTriangle(-0.5, u0, v1, -0.5, u1, v0, -0.5, u0, v0);
			addTriangle(-0.5, u1, v1, -0.5, u1, v0, -0.5, u0, v1);
        }
    }
}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    // fill in your code here.
    radialdivision = Math.max(radialdivision,3);
    heightdivision = Math.max(heightdivision,1);
    const pi_2 = 3.1415926535 * 2;
    for ( i = 0; i < radialdivision; i++) {
		x0 = Math.cos(i * pi_2 / radialdivision) * 0.5;
		z0 = Math.sin(i * pi_2 / radialdivision) * 0.5;
		x1 = Math.cos((i+1) * pi_2 / radialdivision) * 0.5;
		z1 = Math.sin((i+1) * pi_2 / radialdivision) * 0.5;
		for ( j = 0; j < heightdivision; j++) {
			y0 = j / heightdivision - 0.5;
			y1 = (j + 1) / heightdivision - 0.5;
            addTriangle(x1, y1, z1, x1, y0, z1, x0, y0, z0);
			addTriangle(x0, y1, z0, x1, y1, z1, x0, y0, z0);
		}
		addTriangle(0.0, -0.5, 0.0, x0, -0.5, z0, x1, -0.5, z1);
		addTriangle(x1, 0.5, z1, x0, 0.5, z0, 0.0, 0.5, 0.0);
	}
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

