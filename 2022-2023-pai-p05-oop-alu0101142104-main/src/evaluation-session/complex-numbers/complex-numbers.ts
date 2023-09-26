/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Álvarez Mesa
 * @since 07.03.2023
 * @see {@link https://exercism.org/tracks/typescript/exercises/complex-numbers}
 */

export class ComplexNumber {

  /**
   * @desc Constructor of the class
   * @param - Real part of the complex number
   * @param - Imaginary part of the complex number
   */
  constructor(private realPart: number, private imaginaryPart: number) {
}

  /**
   * @description Return the real part of the complex
   */
  public get real(): number {
    return this.realPart;
  }

  /**
   * @desc Return the imaginary part of the complex
   */
  public get imag(): number {
    return this.imaginaryPart;
  }

  /**
   * @desc Add two complex numbers
   * @param other Complex number to ad
   * @return New complex of the result 
   */
  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.realPart + other.real, this.imaginaryPart + other.imag);
  }

  /**
   * @desc Difference of two complex numbers
   * @param other Complex number calculate the difference
   * @return New complex of the result 
   */
  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.realPart - other.real, this.imaginaryPart - other.imag);
  }

  /**
   * @desc Division of two complex numbers
   * @param other Complex number calculate the division
   * @return New complex of the result 
   */
  public div(other: ComplexNumber): ComplexNumber {
    const real = (this.real * other.real + this.imag * other.imag) / (other.real * other.real + other.imag *  other.imag);
    const imaginary = (this.imag * other.real - this.real * other.imag) / (other.real * other.real + other.imag * other.imag);
    return new ComplexNumber(real, imaginary);
  }

  /**
   * @desc Multiply of two complex numbers
   * @param other Complex number calculate the Multiply
   * @return New complex of the result 
   */
  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.realPart * other.real - this.imaginaryPart * other.imag, 
      this.realPart * other.imag + this.imaginaryPart * other.real
      );
  }

  /**
   * @desc Compute the absolute valule of the complex
   * @return The absolute value
   */
  public get abs(): number {
    return (Math.sqrt(this.real * this.real + this.imag * this.imag));
  }

  /**
   * @desc Conjugate of a complex number
   * @return New complex of the result 
   */
  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag ? this.imag * -1 : 0);
  }

  /**
   * @desc Exponencial of a complex number
   * @return New complex of the result 
   */
  public get exp(): ComplexNumber {
    return new ComplexNumber(Math.pow(Math.E, this.real) * Math.cos(this.imag), Math.sin(this.imag));
  }
}
