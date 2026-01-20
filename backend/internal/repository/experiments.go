package repository

import (
	"context"
	"time"

	"github.com/Edwin9301/Zen/backend/pkg"
)

type Experiment struct {
	ID                 uint32             `json:"id"`
	BatchID            string             `json:"batchId"`
	ReactorID          uint32             `json:"reactorId"`
	Operator           string             `json:"operator"`
	Date               time.Time          `json:"date"`
	BlockID            string             `json:"blockId"`
	TimeStart          string             `json:"timeStart"`
	TimeEnd            string             `json:"timeEnd"`
	MaterialFeedstock  MaterialFeedstock  `json:"materialFeedstock"`
	ExposureConditions ExposureConditions `json:"exposureConditions"`
	AnalyticalTests    []AnalyticalTests  `json:"analyticalTests"`
	DeletedAt          *time.Time         `json:"deletedAt"`
	CreatedAt          time.Time          `json:"createdAt"`
}

type MaterialFeedstock struct {
	MixDesign        any `json:"mixDesign"`
	Cement           any `json:"cement"`
	FineAggregate    any `json:"fineAggregate"`
	CoarseAggregate  any `json:"coarseAggregate"`
	Water            any `json:"water"`
	WaterCementRatio any `json:"waterCementRatio"`
	BlockSizeLength  any `json:"blockSizeLength"`
	BlockSizeWidth   any `json:"blockSizeWidth"`
	BlockSizeHeight  any `json:"blockSizeHeight"`
}

type ExposureConditions struct {
	Co2Form           any `json:"co2Form"`
	Co2Mass           any `json:"co2Mass"`
	InjectionPressure any `json:"injectionPressure"`
	HeadSpace         any `json:"headSpace"`
	ReactionTime      any `json:"reactionTime"`
	Energy            any `json:"energy"`
}

type AnalyticalTests struct {
	Name     string    `json:"name"`
	SampleID string    `json:"sampleId"`
	Date     time.Time `json:"date"`
	PdfUrl   string    `json:"pdfUrl"`
}

type FilterExperiments struct {
	Pagination *pkg.Pagination
	Search     *string
	ReactorID  *uint32
	Date       *time.Time
}

type ExperimentRepository interface {
	CreateExperiment(ctx context.Context, experiment *Experiment) (*Experiment, error)
	GetExperimentByID(ctx context.Context, id uint32) (*Experiment, error)
	UpdateExperiment(ctx context.Context, experiment *Experiment) error
	ListExperiments(ctx context.Context, filter *FilterExperiments) ([]*Experiment, *pkg.Pagination, error)
	DeleteExperiment(ctx context.Context, id uint32) error
}
