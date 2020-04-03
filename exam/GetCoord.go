package main

import (
	"fmt"
	"math"
)

type Coordinate struct {
	X float64
	Y float64
}

type Vector struct {
	X      float64
	Y      float64
	Length float64
}

func GetCoord(coordList []Coordinate) (result Coordinate) {
	vectorList := make([]Vector, 0)
	totalLen := .0

	for i := 0; i < len(coordList)-1; i++ {
		length := math.Sqrt(math.Pow(coordList[i+1].X-coordList[i].X, 2) + math.Pow(coordList[i+1].Y-coordList[i].Y, 2)) //计算线段长度

		vectorList = append(vectorList, Vector{ //保存每段的单位向量及长度
			X:      (coordList[i+1].X - coordList[i].X) / length,
			Y:      (coordList[i+1].Y - coordList[i].Y) / length,
			Length: length,
		})

		totalLen += length
	}

	midLen := totalLen / 2

	for index, vector := range vectorList {
		if midLen >= vector.Length {
			midLen -= vector.Length
			continue
		}

		return Coordinate{
			X: coordList[index].X + vector.X*midLen,
			Y: coordList[index].Y + vector.Y*midLen,
		}
	}

	return
}

func main() {
	coordList := []Coordinate{
		{0, 0},
		{30, 30},
		{40, 40},

		// {0, 1},
	}

	coord := GetCoord(coordList)

	fmt.Println(coord)

}
