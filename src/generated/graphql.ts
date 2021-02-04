import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};







export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



/** Les amarres pour garer son vehicule : une place de parking ou un arceau pour velo */
export type Dock = Node & {
  __typename?: 'Dock';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Dock>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mobilityNodes: Array<MobilityNode>;
  /** Belongs to */
  players: Array<Player>;
  /** List of Dock versions */
  history: Array<Version>;
};


/** Les amarres pour garer son vehicule : une place de parking ou un arceau pour velo */
export type DockDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Les amarres pour garer son vehicule : une place de parking ou un arceau pour velo */
export type DockMobilityNodesArgs = {
  where?: Maybe<MobilityNodeWhereInput>;
  orderBy?: Maybe<MobilityNodeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Les amarres pour garer son vehicule : une place de parking ou un arceau pour velo */
export type DockPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Les amarres pour garer son vehicule : une place de parking ou un arceau pour velo */
export type DockHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DockConnectInput = {
  /** Document to connect */
  where: DockWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type DockConnection = {
  __typename?: 'DockConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DockEdge>;
  aggregate: Aggregate;
};

export type DockCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mobilityNodes?: Maybe<MobilityNodeCreateManyInlineInput>;
  players?: Maybe<PlayerCreateManyInlineInput>;
};

export type DockCreateManyInlineInput = {
  /** Create and connect multiple existing Dock documents */
  create?: Maybe<Array<DockCreateInput>>;
  /** Connect multiple existing Dock documents */
  connect?: Maybe<Array<DockWhereUniqueInput>>;
};

export type DockCreateOneInlineInput = {
  /** Create and connect one Dock document */
  create?: Maybe<DockCreateInput>;
  /** Connect one existing Dock document */
  connect?: Maybe<DockWhereUniqueInput>;
};

/** An edge in a connection. */
export type DockEdge = {
  __typename?: 'DockEdge';
  /** The item at the end of the edge. */
  node: Dock;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type DockManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DockWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<DockType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<DockType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<DockType>>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
  players_every?: Maybe<PlayerWhereInput>;
  players_some?: Maybe<PlayerWhereInput>;
  players_none?: Maybe<PlayerWhereInput>;
};

export enum DockOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC'
}

/** Type d'emplacement */
export enum DockType {
  BicycleHoop = 'BicycleHoop',
  Parking = 'Parking'
}

export type DockUpdateInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mobilityNodes?: Maybe<MobilityNodeUpdateManyInlineInput>;
  players?: Maybe<PlayerUpdateManyInlineInput>;
};

export type DockUpdateManyInlineInput = {
  /** Create and connect multiple Dock documents */
  create?: Maybe<Array<DockCreateInput>>;
  /** Connect multiple existing Dock documents */
  connect?: Maybe<Array<DockConnectInput>>;
  /** Override currently-connected documents with multiple existing Dock documents */
  set?: Maybe<Array<DockWhereUniqueInput>>;
  /** Update multiple Dock documents */
  update?: Maybe<Array<DockUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Dock documents */
  upsert?: Maybe<Array<DockUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Dock documents */
  disconnect?: Maybe<Array<DockWhereUniqueInput>>;
  /** Delete multiple Dock documents */
  delete?: Maybe<Array<DockWhereUniqueInput>>;
};

export type DockUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DockUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DockWhereInput;
  /** Update many input */
  data: DockUpdateManyInput;
};

export type DockUpdateOneInlineInput = {
  /** Create and connect one Dock document */
  create?: Maybe<DockCreateInput>;
  /** Update single Dock document */
  update?: Maybe<DockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Dock document */
  upsert?: Maybe<DockUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Dock document */
  connect?: Maybe<DockWhereUniqueInput>;
  /** Disconnect currently connected Dock document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Dock document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DockUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DockWhereUniqueInput;
  /** Document to update */
  data: DockUpdateInput;
};

export type DockUpsertInput = {
  /** Create document if it didn't exist */
  create: DockCreateInput;
  /** Update document if it exists */
  update: DockUpdateInput;
};

export type DockUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DockWhereUniqueInput;
  /** Upsert data */
  data: DockUpsertInput;
};

/** Identifies documents */
export type DockWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DockWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<DockType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<DockType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<DockType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<DockType>>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
  players_every?: Maybe<PlayerWhereInput>;
  players_some?: Maybe<PlayerWhereInput>;
  players_none?: Maybe<PlayerWhereInput>;
};

/** References Dock record uniquely */
export type DockWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Fr = 'fr'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNode = Node & {
  __typename?: 'MobilityNode';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<MobilityNode>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<Player>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  /** Le rayon du cercle en metres definissant la limite du noeud */
  radius?: Maybe<Scalars['Float']>;
  docks: Array<Dock>;
  tracks: Array<Track>;
  /** List of MobilityNode versions */
  history: Array<Version>;
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNodeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNodePlayerArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNodeDocksArgs = {
  where?: Maybe<DockWhereInput>;
  orderBy?: Maybe<DockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNodeTracksArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Un noeud de mobilite, organise la mobilite. Ensemble d'emplacements, arrets se situant au meme endroit */
export type MobilityNodeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type MobilityNodeConnectInput = {
  /** Document to connect */
  where: MobilityNodeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type MobilityNodeConnection = {
  __typename?: 'MobilityNodeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MobilityNodeEdge>;
  aggregate: Aggregate;
};

export type MobilityNodeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerCreateOneInlineInput>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
  docks?: Maybe<DockCreateManyInlineInput>;
  tracks?: Maybe<TrackCreateManyInlineInput>;
};

export type MobilityNodeCreateManyInlineInput = {
  /** Create and connect multiple existing MobilityNode documents */
  create?: Maybe<Array<MobilityNodeCreateInput>>;
  /** Connect multiple existing MobilityNode documents */
  connect?: Maybe<Array<MobilityNodeWhereUniqueInput>>;
};

export type MobilityNodeCreateOneInlineInput = {
  /** Create and connect one MobilityNode document */
  create?: Maybe<MobilityNodeCreateInput>;
  /** Connect one existing MobilityNode document */
  connect?: Maybe<MobilityNodeWhereUniqueInput>;
};

/** An edge in a connection. */
export type MobilityNodeEdge = {
  __typename?: 'MobilityNodeEdge';
  /** The item at the end of the edge. */
  node: MobilityNode;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type MobilityNodeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MobilityNodeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MobilityNodeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MobilityNodeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  radius_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  radius_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  radius_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  radius_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  radius_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  radius_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  radius_gte?: Maybe<Scalars['Float']>;
  docks_every?: Maybe<DockWhereInput>;
  docks_some?: Maybe<DockWhereInput>;
  docks_none?: Maybe<DockWhereInput>;
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
};

export enum MobilityNodeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  RadiusAsc = 'radius_ASC',
  RadiusDesc = 'radius_DESC'
}

export type MobilityNodeUpdateInput = {
  player?: Maybe<PlayerUpdateOneInlineInput>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
  docks?: Maybe<DockUpdateManyInlineInput>;
  tracks?: Maybe<TrackUpdateManyInlineInput>;
};

export type MobilityNodeUpdateManyInlineInput = {
  /** Create and connect multiple MobilityNode documents */
  create?: Maybe<Array<MobilityNodeCreateInput>>;
  /** Connect multiple existing MobilityNode documents */
  connect?: Maybe<Array<MobilityNodeConnectInput>>;
  /** Override currently-connected documents with multiple existing MobilityNode documents */
  set?: Maybe<Array<MobilityNodeWhereUniqueInput>>;
  /** Update multiple MobilityNode documents */
  update?: Maybe<Array<MobilityNodeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MobilityNode documents */
  upsert?: Maybe<Array<MobilityNodeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple MobilityNode documents */
  disconnect?: Maybe<Array<MobilityNodeWhereUniqueInput>>;
  /** Delete multiple MobilityNode documents */
  delete?: Maybe<Array<MobilityNodeWhereUniqueInput>>;
};

export type MobilityNodeUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
};

export type MobilityNodeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MobilityNodeWhereInput;
  /** Update many input */
  data: MobilityNodeUpdateManyInput;
};

export type MobilityNodeUpdateOneInlineInput = {
  /** Create and connect one MobilityNode document */
  create?: Maybe<MobilityNodeCreateInput>;
  /** Update single MobilityNode document */
  update?: Maybe<MobilityNodeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MobilityNode document */
  upsert?: Maybe<MobilityNodeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing MobilityNode document */
  connect?: Maybe<MobilityNodeWhereUniqueInput>;
  /** Disconnect currently connected MobilityNode document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected MobilityNode document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type MobilityNodeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MobilityNodeWhereUniqueInput;
  /** Document to update */
  data: MobilityNodeUpdateInput;
};

export type MobilityNodeUpsertInput = {
  /** Create document if it didn't exist */
  create: MobilityNodeCreateInput;
  /** Update document if it exists */
  update: MobilityNodeUpdateInput;
};

export type MobilityNodeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MobilityNodeWhereUniqueInput;
  /** Upsert data */
  data: MobilityNodeUpsertInput;
};

/** Identifies documents */
export type MobilityNodeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MobilityNodeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MobilityNodeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MobilityNodeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  radius_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  radius_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  radius_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  radius_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  radius_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  radius_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  radius_gte?: Maybe<Scalars['Float']>;
  docks_every?: Maybe<DockWhereInput>;
  docks_some?: Maybe<DockWhereInput>;
  docks_none?: Maybe<DockWhereInput>;
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
};

/** References MobilityNode record uniquely */
export type MobilityNodeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one dock */
  createDock?: Maybe<Dock>;
  /** Update one dock */
  updateDock?: Maybe<Dock>;
  /** Delete one dock from _all_ existing stages. Returns deleted document. */
  deleteDock?: Maybe<Dock>;
  /** Upsert one dock */
  upsertDock?: Maybe<Dock>;
  /** Publish one dock */
  publishDock?: Maybe<Dock>;
  /** Unpublish one dock from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDock?: Maybe<Dock>;
  /** Update many Dock documents */
  updateManyDocksConnection: DockConnection;
  /** Delete many Dock documents, return deleted documents */
  deleteManyDocksConnection: DockConnection;
  /** Publish many Dock documents */
  publishManyDocksConnection: DockConnection;
  /** Find many Dock documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDocksConnection: DockConnection;
  /**
   * Update many docks
   * @deprecated Please use the new paginated many mutation (updateManyDocksConnection)
   */
  updateManyDocks: BatchPayload;
  /**
   * Delete many Dock documents
   * @deprecated Please use the new paginated many mutation (deleteManyDocksConnection)
   */
  deleteManyDocks: BatchPayload;
  /**
   * Publish many Dock documents
   * @deprecated Please use the new paginated many mutation (publishManyDocksConnection)
   */
  publishManyDocks: BatchPayload;
  /**
   * Unpublish many Dock documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDocksConnection)
   */
  unpublishManyDocks: BatchPayload;
  /** Create one mobilityNode */
  createMobilityNode?: Maybe<MobilityNode>;
  /** Update one mobilityNode */
  updateMobilityNode?: Maybe<MobilityNode>;
  /** Delete one mobilityNode from _all_ existing stages. Returns deleted document. */
  deleteMobilityNode?: Maybe<MobilityNode>;
  /** Upsert one mobilityNode */
  upsertMobilityNode?: Maybe<MobilityNode>;
  /** Publish one mobilityNode */
  publishMobilityNode?: Maybe<MobilityNode>;
  /** Unpublish one mobilityNode from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMobilityNode?: Maybe<MobilityNode>;
  /** Update many MobilityNode documents */
  updateManyMobilityNodesConnection: MobilityNodeConnection;
  /** Delete many MobilityNode documents, return deleted documents */
  deleteManyMobilityNodesConnection: MobilityNodeConnection;
  /** Publish many MobilityNode documents */
  publishManyMobilityNodesConnection: MobilityNodeConnection;
  /** Find many MobilityNode documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMobilityNodesConnection: MobilityNodeConnection;
  /**
   * Update many mobilityNodes
   * @deprecated Please use the new paginated many mutation (updateManyMobilityNodesConnection)
   */
  updateManyMobilityNodes: BatchPayload;
  /**
   * Delete many MobilityNode documents
   * @deprecated Please use the new paginated many mutation (deleteManyMobilityNodesConnection)
   */
  deleteManyMobilityNodes: BatchPayload;
  /**
   * Publish many MobilityNode documents
   * @deprecated Please use the new paginated many mutation (publishManyMobilityNodesConnection)
   */
  publishManyMobilityNodes: BatchPayload;
  /**
   * Unpublish many MobilityNode documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMobilityNodesConnection)
   */
  unpublishManyMobilityNodes: BatchPayload;
  /** Create one player */
  createPlayer?: Maybe<Player>;
  /** Update one player */
  updatePlayer?: Maybe<Player>;
  /** Delete one player from _all_ existing stages. Returns deleted document. */
  deletePlayer?: Maybe<Player>;
  /** Upsert one player */
  upsertPlayer?: Maybe<Player>;
  /** Publish one player */
  publishPlayer?: Maybe<Player>;
  /** Unpublish one player from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPlayer?: Maybe<Player>;
  /** Update many Player documents */
  updateManyPlayersConnection: PlayerConnection;
  /** Delete many Player documents, return deleted documents */
  deleteManyPlayersConnection: PlayerConnection;
  /** Publish many Player documents */
  publishManyPlayersConnection: PlayerConnection;
  /** Find many Player documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPlayersConnection: PlayerConnection;
  /**
   * Update many players
   * @deprecated Please use the new paginated many mutation (updateManyPlayersConnection)
   */
  updateManyPlayers: BatchPayload;
  /**
   * Delete many Player documents
   * @deprecated Please use the new paginated many mutation (deleteManyPlayersConnection)
   */
  deleteManyPlayers: BatchPayload;
  /**
   * Publish many Player documents
   * @deprecated Please use the new paginated many mutation (publishManyPlayersConnection)
   */
  publishManyPlayers: BatchPayload;
  /**
   * Unpublish many Player documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPlayersConnection)
   */
  unpublishManyPlayers: BatchPayload;
  /** Create one route */
  createRoute?: Maybe<Route>;
  /** Update one route */
  updateRoute?: Maybe<Route>;
  /** Delete one route from _all_ existing stages. Returns deleted document. */
  deleteRoute?: Maybe<Route>;
  /** Upsert one route */
  upsertRoute?: Maybe<Route>;
  /** Publish one route */
  publishRoute?: Maybe<Route>;
  /** Unpublish one route from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRoute?: Maybe<Route>;
  /** Update many Route documents */
  updateManyRoutesConnection: RouteConnection;
  /** Delete many Route documents, return deleted documents */
  deleteManyRoutesConnection: RouteConnection;
  /** Publish many Route documents */
  publishManyRoutesConnection: RouteConnection;
  /** Find many Route documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRoutesConnection: RouteConnection;
  /**
   * Update many routes
   * @deprecated Please use the new paginated many mutation (updateManyRoutesConnection)
   */
  updateManyRoutes: BatchPayload;
  /**
   * Delete many Route documents
   * @deprecated Please use the new paginated many mutation (deleteManyRoutesConnection)
   */
  deleteManyRoutes: BatchPayload;
  /**
   * Publish many Route documents
   * @deprecated Please use the new paginated many mutation (publishManyRoutesConnection)
   */
  publishManyRoutes: BatchPayload;
  /**
   * Unpublish many Route documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRoutesConnection)
   */
  unpublishManyRoutes: BatchPayload;
  /** Create one school */
  createSchool?: Maybe<School>;
  /** Update one school */
  updateSchool?: Maybe<School>;
  /** Delete one school from _all_ existing stages. Returns deleted document. */
  deleteSchool?: Maybe<School>;
  /** Upsert one school */
  upsertSchool?: Maybe<School>;
  /** Publish one school */
  publishSchool?: Maybe<School>;
  /** Unpublish one school from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSchool?: Maybe<School>;
  /** Update many School documents */
  updateManySchoolsConnection: SchoolConnection;
  /** Delete many School documents, return deleted documents */
  deleteManySchoolsConnection: SchoolConnection;
  /** Publish many School documents */
  publishManySchoolsConnection: SchoolConnection;
  /** Find many School documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySchoolsConnection: SchoolConnection;
  /**
   * Update many schools
   * @deprecated Please use the new paginated many mutation (updateManySchoolsConnection)
   */
  updateManySchools: BatchPayload;
  /**
   * Delete many School documents
   * @deprecated Please use the new paginated many mutation (deleteManySchoolsConnection)
   */
  deleteManySchools: BatchPayload;
  /**
   * Publish many School documents
   * @deprecated Please use the new paginated many mutation (publishManySchoolsConnection)
   */
  publishManySchools: BatchPayload;
  /**
   * Unpublish many School documents
   * @deprecated Please use the new paginated many mutation (unpublishManySchoolsConnection)
   */
  unpublishManySchools: BatchPayload;
  /** Create one stop */
  createStop?: Maybe<Stop>;
  /** Update one stop */
  updateStop?: Maybe<Stop>;
  /** Delete one stop from _all_ existing stages. Returns deleted document. */
  deleteStop?: Maybe<Stop>;
  /** Upsert one stop */
  upsertStop?: Maybe<Stop>;
  /** Publish one stop */
  publishStop?: Maybe<Stop>;
  /** Unpublish one stop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStop?: Maybe<Stop>;
  /** Update many Stop documents */
  updateManyStopsConnection: StopConnection;
  /** Delete many Stop documents, return deleted documents */
  deleteManyStopsConnection: StopConnection;
  /** Publish many Stop documents */
  publishManyStopsConnection: StopConnection;
  /** Find many Stop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStopsConnection: StopConnection;
  /**
   * Update many stops
   * @deprecated Please use the new paginated many mutation (updateManyStopsConnection)
   */
  updateManyStops: BatchPayload;
  /**
   * Delete many Stop documents
   * @deprecated Please use the new paginated many mutation (deleteManyStopsConnection)
   */
  deleteManyStops: BatchPayload;
  /**
   * Publish many Stop documents
   * @deprecated Please use the new paginated many mutation (publishManyStopsConnection)
   */
  publishManyStops: BatchPayload;
  /**
   * Unpublish many Stop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStopsConnection)
   */
  unpublishManyStops: BatchPayload;
  /** Create one track */
  createTrack?: Maybe<Track>;
  /** Update one track */
  updateTrack?: Maybe<Track>;
  /** Delete one track from _all_ existing stages. Returns deleted document. */
  deleteTrack?: Maybe<Track>;
  /** Upsert one track */
  upsertTrack?: Maybe<Track>;
  /** Publish one track */
  publishTrack?: Maybe<Track>;
  /** Unpublish one track from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTrack?: Maybe<Track>;
  /** Update many Track documents */
  updateManyTracksConnection: TrackConnection;
  /** Delete many Track documents, return deleted documents */
  deleteManyTracksConnection: TrackConnection;
  /** Publish many Track documents */
  publishManyTracksConnection: TrackConnection;
  /** Find many Track documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTracksConnection: TrackConnection;
  /**
   * Update many tracks
   * @deprecated Please use the new paginated many mutation (updateManyTracksConnection)
   */
  updateManyTracks: BatchPayload;
  /**
   * Delete many Track documents
   * @deprecated Please use the new paginated many mutation (deleteManyTracksConnection)
   */
  deleteManyTracks: BatchPayload;
  /**
   * Publish many Track documents
   * @deprecated Please use the new paginated many mutation (publishManyTracksConnection)
   */
  publishManyTracks: BatchPayload;
  /**
   * Unpublish many Track documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTracksConnection)
   */
  unpublishManyTracks: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateDockArgs = {
  data: DockCreateInput;
};


export type MutationUpdateDockArgs = {
  where: DockWhereUniqueInput;
  data: DockUpdateInput;
};


export type MutationDeleteDockArgs = {
  where: DockWhereUniqueInput;
};


export type MutationUpsertDockArgs = {
  where: DockWhereUniqueInput;
  upsert: DockUpsertInput;
};


export type MutationPublishDockArgs = {
  where: DockWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishDockArgs = {
  where: DockWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyDocksConnectionArgs = {
  where?: Maybe<DockManyWhereInput>;
  data: DockUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyDocksConnectionArgs = {
  where?: Maybe<DockManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyDocksConnectionArgs = {
  where?: Maybe<DockManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyDocksConnectionArgs = {
  where?: Maybe<DockManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyDocksArgs = {
  where?: Maybe<DockManyWhereInput>;
  data: DockUpdateManyInput;
};


export type MutationDeleteManyDocksArgs = {
  where?: Maybe<DockManyWhereInput>;
};


export type MutationPublishManyDocksArgs = {
  where?: Maybe<DockManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyDocksArgs = {
  where?: Maybe<DockManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateMobilityNodeArgs = {
  data: MobilityNodeCreateInput;
};


export type MutationUpdateMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
  data: MobilityNodeUpdateInput;
};


export type MutationDeleteMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
};


export type MutationUpsertMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
  upsert: MobilityNodeUpsertInput;
};


export type MutationPublishMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyMobilityNodesConnectionArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  data: MobilityNodeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyMobilityNodesConnectionArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyMobilityNodesConnectionArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyMobilityNodesConnectionArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyMobilityNodesArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  data: MobilityNodeUpdateManyInput;
};


export type MutationDeleteManyMobilityNodesArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
};


export type MutationPublishManyMobilityNodesArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyMobilityNodesArgs = {
  where?: Maybe<MobilityNodeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationUpdatePlayerArgs = {
  where: PlayerWhereUniqueInput;
  data: PlayerUpdateInput;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationUpsertPlayerArgs = {
  where: PlayerWhereUniqueInput;
  upsert: PlayerUpsertInput;
};


export type MutationPublishPlayerArgs = {
  where: PlayerWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPlayerArgs = {
  where: PlayerWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  data: PlayerUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  data: PlayerUpdateManyInput;
};


export type MutationDeleteManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
};


export type MutationPublishManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateRouteArgs = {
  data: RouteCreateInput;
};


export type MutationUpdateRouteArgs = {
  where: RouteWhereUniqueInput;
  data: RouteUpdateInput;
};


export type MutationDeleteRouteArgs = {
  where: RouteWhereUniqueInput;
};


export type MutationUpsertRouteArgs = {
  where: RouteWhereUniqueInput;
  upsert: RouteUpsertInput;
};


export type MutationPublishRouteArgs = {
  where: RouteWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishRouteArgs = {
  where: RouteWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyRoutesConnectionArgs = {
  where?: Maybe<RouteManyWhereInput>;
  data: RouteUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyRoutesConnectionArgs = {
  where?: Maybe<RouteManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyRoutesConnectionArgs = {
  where?: Maybe<RouteManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyRoutesConnectionArgs = {
  where?: Maybe<RouteManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyRoutesArgs = {
  where?: Maybe<RouteManyWhereInput>;
  data: RouteUpdateManyInput;
};


export type MutationDeleteManyRoutesArgs = {
  where?: Maybe<RouteManyWhereInput>;
};


export type MutationPublishManyRoutesArgs = {
  where?: Maybe<RouteManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyRoutesArgs = {
  where?: Maybe<RouteManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationUpdateSchoolArgs = {
  where: SchoolWhereUniqueInput;
  data: SchoolUpdateInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertSchoolArgs = {
  where: SchoolWhereUniqueInput;
  upsert: SchoolUpsertInput;
};


export type MutationPublishSchoolArgs = {
  where: SchoolWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSchoolArgs = {
  where: SchoolWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySchoolsConnectionArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  data: SchoolUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySchoolsConnectionArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySchoolsConnectionArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySchoolsConnectionArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySchoolsArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  data: SchoolUpdateManyInput;
};


export type MutationDeleteManySchoolsArgs = {
  where?: Maybe<SchoolManyWhereInput>;
};


export type MutationPublishManySchoolsArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySchoolsArgs = {
  where?: Maybe<SchoolManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateStopArgs = {
  data: StopCreateInput;
};


export type MutationUpdateStopArgs = {
  where: StopWhereUniqueInput;
  data: StopUpdateInput;
};


export type MutationDeleteStopArgs = {
  where: StopWhereUniqueInput;
};


export type MutationUpsertStopArgs = {
  where: StopWhereUniqueInput;
  upsert: StopUpsertInput;
};


export type MutationPublishStopArgs = {
  where: StopWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishStopArgs = {
  where: StopWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyStopsConnectionArgs = {
  where?: Maybe<StopManyWhereInput>;
  data: StopUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyStopsConnectionArgs = {
  where?: Maybe<StopManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyStopsConnectionArgs = {
  where?: Maybe<StopManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyStopsConnectionArgs = {
  where?: Maybe<StopManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyStopsArgs = {
  where?: Maybe<StopManyWhereInput>;
  data: StopUpdateManyInput;
};


export type MutationDeleteManyStopsArgs = {
  where?: Maybe<StopManyWhereInput>;
};


export type MutationPublishManyStopsArgs = {
  where?: Maybe<StopManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyStopsArgs = {
  where?: Maybe<StopManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput;
};


export type MutationUpdateTrackArgs = {
  where: TrackWhereUniqueInput;
  data: TrackUpdateInput;
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type MutationUpsertTrackArgs = {
  where: TrackWhereUniqueInput;
  upsert: TrackUpsertInput;
};


export type MutationPublishTrackArgs = {
  where: TrackWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTrackArgs = {
  where: TrackWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTracksConnectionArgs = {
  where?: Maybe<TrackManyWhereInput>;
  data: TrackUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTracksConnectionArgs = {
  where?: Maybe<TrackManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTracksConnectionArgs = {
  where?: Maybe<TrackManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTracksConnectionArgs = {
  where?: Maybe<TrackManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTracksArgs = {
  where?: Maybe<TrackManyWhereInput>;
  data: TrackUpdateManyInput;
};


export type MutationDeleteManyTracksArgs = {
  where?: Maybe<TrackManyWhereInput>;
};


export type MutationPublishManyTracksArgs = {
  where?: Maybe<TrackManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTracksArgs = {
  where?: Maybe<TrackManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type Player = Node & {
  __typename?: 'Player';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Player>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<School>;
  mobilityNodes: Array<MobilityNode>;
  /** appartient a un acteur */
  tracks: Array<Track>;
  /** owns */
  docks: Array<Dock>;
  /** List of Player versions */
  history: Array<Version>;
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerSchoolArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerMobilityNodesArgs = {
  where?: Maybe<MobilityNodeWhereInput>;
  orderBy?: Maybe<MobilityNodeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerTracksArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerDocksArgs = {
  where?: Maybe<DockWhereInput>;
  orderBy?: Maybe<DockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Acteurs de la mobilite (une ecole, une association de parents, une institution), peuvent creer des noeuds et des chemins */
export type PlayerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PlayerConnectInput = {
  /** Document to connect */
  where: PlayerWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PlayerEdge>;
  aggregate: Aggregate;
};

export type PlayerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolCreateOneInlineInput>;
  mobilityNodes?: Maybe<MobilityNodeCreateManyInlineInput>;
  tracks?: Maybe<TrackCreateManyInlineInput>;
  docks?: Maybe<DockCreateManyInlineInput>;
};

export type PlayerCreateManyInlineInput = {
  /** Create and connect multiple existing Player documents */
  create?: Maybe<Array<PlayerCreateInput>>;
  /** Connect multiple existing Player documents */
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerCreateOneInlineInput = {
  /** Create and connect one Player document */
  create?: Maybe<PlayerCreateInput>;
  /** Connect one existing Player document */
  connect?: Maybe<PlayerWhereUniqueInput>;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** The item at the end of the edge. */
  node: Player;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PlayerManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlayerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlayerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlayerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolWhereInput>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
  docks_every?: Maybe<DockWhereInput>;
  docks_some?: Maybe<DockWhereInput>;
  docks_none?: Maybe<DockWhereInput>;
};

export enum PlayerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type PlayerUpdateInput = {
  name?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolUpdateOneInlineInput>;
  mobilityNodes?: Maybe<MobilityNodeUpdateManyInlineInput>;
  tracks?: Maybe<TrackUpdateManyInlineInput>;
  docks?: Maybe<DockUpdateManyInlineInput>;
};

export type PlayerUpdateManyInlineInput = {
  /** Create and connect multiple Player documents */
  create?: Maybe<Array<PlayerCreateInput>>;
  /** Connect multiple existing Player documents */
  connect?: Maybe<Array<PlayerConnectInput>>;
  /** Override currently-connected documents with multiple existing Player documents */
  set?: Maybe<Array<PlayerWhereUniqueInput>>;
  /** Update multiple Player documents */
  update?: Maybe<Array<PlayerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Player documents */
  upsert?: Maybe<Array<PlayerUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Player documents */
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>;
  /** Delete multiple Player documents */
  delete?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type PlayerUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PlayerWhereInput;
  /** Update many input */
  data: PlayerUpdateManyInput;
};

export type PlayerUpdateOneInlineInput = {
  /** Create and connect one Player document */
  create?: Maybe<PlayerCreateInput>;
  /** Update single Player document */
  update?: Maybe<PlayerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Player document */
  upsert?: Maybe<PlayerUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Player document */
  connect?: Maybe<PlayerWhereUniqueInput>;
  /** Disconnect currently connected Player document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Player document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PlayerUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlayerWhereUniqueInput;
  /** Document to update */
  data: PlayerUpdateInput;
};

export type PlayerUpsertInput = {
  /** Create document if it didn't exist */
  create: PlayerCreateInput;
  /** Update document if it exists */
  update: PlayerUpdateInput;
};

export type PlayerUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlayerWhereUniqueInput;
  /** Upsert data */
  data: PlayerUpsertInput;
};

/** Identifies documents */
export type PlayerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlayerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlayerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlayerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  school?: Maybe<SchoolWhereInput>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
  docks_every?: Maybe<DockWhereInput>;
  docks_some?: Maybe<DockWhereInput>;
  docks_none?: Maybe<DockWhereInput>;
};

/** References Player record uniquely */
export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple docks */
  docks: Array<Dock>;
  /** Retrieve a single dock */
  dock?: Maybe<Dock>;
  /** Retrieve multiple docks using the Relay connection interface */
  docksConnection: DockConnection;
  /** Retrieve document version */
  dockVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple mobilityNodes */
  mobilityNodes: Array<MobilityNode>;
  /** Retrieve a single mobilityNode */
  mobilityNode?: Maybe<MobilityNode>;
  /** Retrieve multiple mobilityNodes using the Relay connection interface */
  mobilityNodesConnection: MobilityNodeConnection;
  /** Retrieve document version */
  mobilityNodeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple players */
  players: Array<Player>;
  /** Retrieve a single player */
  player?: Maybe<Player>;
  /** Retrieve multiple players using the Relay connection interface */
  playersConnection: PlayerConnection;
  /** Retrieve document version */
  playerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple routes */
  routes: Array<Route>;
  /** Retrieve a single route */
  route?: Maybe<Route>;
  /** Retrieve multiple routes using the Relay connection interface */
  routesConnection: RouteConnection;
  /** Retrieve document version */
  routeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple schools */
  schools: Array<School>;
  /** Retrieve a single school */
  school?: Maybe<School>;
  /** Retrieve multiple schools using the Relay connection interface */
  schoolsConnection: SchoolConnection;
  /** Retrieve document version */
  schoolVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple stops */
  stops: Array<Stop>;
  /** Retrieve a single stop */
  stop?: Maybe<Stop>;
  /** Retrieve multiple stops using the Relay connection interface */
  stopsConnection: StopConnection;
  /** Retrieve document version */
  stopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tracks */
  tracks: Array<Track>;
  /** Retrieve a single track */
  track?: Maybe<Track>;
  /** Retrieve multiple tracks using the Relay connection interface */
  tracksConnection: TrackConnection;
  /** Retrieve document version */
  trackVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDocksArgs = {
  where?: Maybe<DockWhereInput>;
  orderBy?: Maybe<DockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDockArgs = {
  where: DockWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDocksConnectionArgs = {
  where?: Maybe<DockWhereInput>;
  orderBy?: Maybe<DockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryDockVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMobilityNodesArgs = {
  where?: Maybe<MobilityNodeWhereInput>;
  orderBy?: Maybe<MobilityNodeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMobilityNodeArgs = {
  where: MobilityNodeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMobilityNodesConnectionArgs = {
  where?: Maybe<MobilityNodeWhereInput>;
  orderBy?: Maybe<MobilityNodeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMobilityNodeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlayersConnectionArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlayerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRoutesArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryRouteArgs = {
  where: RouteWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryRoutesConnectionArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryRouteVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySchoolsArgs = {
  where?: Maybe<SchoolWhereInput>;
  orderBy?: Maybe<SchoolOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySchoolsConnectionArgs = {
  where?: Maybe<SchoolWhereInput>;
  orderBy?: Maybe<SchoolOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySchoolVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStopsArgs = {
  where?: Maybe<StopWhereInput>;
  orderBy?: Maybe<StopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStopArgs = {
  where: StopWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStopsConnectionArgs = {
  where?: Maybe<StopWhereInput>;
  orderBy?: Maybe<StopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTracksConnectionArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTrackVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Les routes de transit (train, bus) */
export type Route = Node & {
  __typename?: 'Route';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Route>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  departure?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  /** link to a route web page */
  url?: Maybe<Scalars['String']>;
  stops: Array<Stop>;
  /** List of Route versions */
  history: Array<Version>;
};


/** Les routes de transit (train, bus) */
export type RouteDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Les routes de transit (train, bus) */
export type RouteStopsArgs = {
  where?: Maybe<StopWhereInput>;
  orderBy?: Maybe<StopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Les routes de transit (train, bus) */
export type RouteHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type RouteConnectInput = {
  /** Document to connect */
  where: RouteWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type RouteConnection = {
  __typename?: 'RouteConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<RouteEdge>;
  aggregate: Aggregate;
};

export type RouteCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  departure?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  stops?: Maybe<StopCreateManyInlineInput>;
};

export type RouteCreateManyInlineInput = {
  /** Create and connect multiple existing Route documents */
  create?: Maybe<Array<RouteCreateInput>>;
  /** Connect multiple existing Route documents */
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
};

export type RouteCreateOneInlineInput = {
  /** Create and connect one Route document */
  create?: Maybe<RouteCreateInput>;
  /** Connect one existing Route document */
  connect?: Maybe<RouteWhereUniqueInput>;
};

/** An edge in a connection. */
export type RouteEdge = {
  __typename?: 'RouteEdge';
  /** The item at the end of the edge. */
  node: Route;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type RouteManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RouteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RouteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RouteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  /** All values that are not equal to given value. */
  transitType_not?: Maybe<TransitType>;
  /** All values that are contained in given list. */
  transitType_in?: Maybe<Array<TransitType>>;
  /** All values that are not contained in given list. */
  transitType_not_in?: Maybe<Array<TransitType>>;
  departure?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  departure_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  departure_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  departure_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  departure_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  departure_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  departure_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  departure_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  departure_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  departure_not_ends_with?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destination_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destination_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destination_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destination_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destination_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destination_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destination_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destination_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destination_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  stops_every?: Maybe<StopWhereInput>;
  stops_some?: Maybe<StopWhereInput>;
  stops_none?: Maybe<StopWhereInput>;
};

export enum RouteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TransitTypeAsc = 'transitType_ASC',
  TransitTypeDesc = 'transitType_DESC',
  DepartureAsc = 'departure_ASC',
  DepartureDesc = 'departure_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type RouteUpdateInput = {
  name?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  departure?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  stops?: Maybe<StopUpdateManyInlineInput>;
};

export type RouteUpdateManyInlineInput = {
  /** Create and connect multiple Route documents */
  create?: Maybe<Array<RouteCreateInput>>;
  /** Connect multiple existing Route documents */
  connect?: Maybe<Array<RouteConnectInput>>;
  /** Override currently-connected documents with multiple existing Route documents */
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  /** Update multiple Route documents */
  update?: Maybe<Array<RouteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Route documents */
  upsert?: Maybe<Array<RouteUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Route documents */
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  /** Delete multiple Route documents */
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
};

export type RouteUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  departure?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RouteUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: RouteWhereInput;
  /** Update many input */
  data: RouteUpdateManyInput;
};

export type RouteUpdateOneInlineInput = {
  /** Create and connect one Route document */
  create?: Maybe<RouteCreateInput>;
  /** Update single Route document */
  update?: Maybe<RouteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Route document */
  upsert?: Maybe<RouteUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Route document */
  connect?: Maybe<RouteWhereUniqueInput>;
  /** Disconnect currently connected Route document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Route document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type RouteUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: RouteWhereUniqueInput;
  /** Document to update */
  data: RouteUpdateInput;
};

export type RouteUpsertInput = {
  /** Create document if it didn't exist */
  create: RouteCreateInput;
  /** Update document if it exists */
  update: RouteUpdateInput;
};

export type RouteUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: RouteWhereUniqueInput;
  /** Upsert data */
  data: RouteUpsertInput;
};

/** Identifies documents */
export type RouteWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RouteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RouteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RouteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  transitType?: Maybe<TransitType>;
  /** All values that are not equal to given value. */
  transitType_not?: Maybe<TransitType>;
  /** All values that are contained in given list. */
  transitType_in?: Maybe<Array<TransitType>>;
  /** All values that are not contained in given list. */
  transitType_not_in?: Maybe<Array<TransitType>>;
  departure?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  departure_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  departure_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  departure_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  departure_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  departure_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  departure_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  departure_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  departure_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  departure_not_ends_with?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  destination_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  destination_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  destination_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  destination_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  destination_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  destination_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  destination_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  destination_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  destination_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  stops_every?: Maybe<StopWhereInput>;
  stops_some?: Maybe<StopWhereInput>;
  stops_none?: Maybe<StopWhereInput>;
};

/** References Route record uniquely */
export type RouteWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Les ecoles ou l'on veut arriver et d'ou on veut partir */
export type School = Node & {
  __typename?: 'School';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<School>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  player?: Maybe<Player>;
  /** List of School versions */
  history: Array<Version>;
};


/** Les ecoles ou l'on veut arriver et d'ou on veut partir */
export type SchoolDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Les ecoles ou l'on veut arriver et d'ou on veut partir */
export type SchoolPlayerArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Les ecoles ou l'on veut arriver et d'ou on veut partir */
export type SchoolHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SchoolConnectInput = {
  /** Document to connect */
  where: SchoolWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SchoolConnection = {
  __typename?: 'SchoolConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SchoolEdge>;
  aggregate: Aggregate;
};

export type SchoolCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  player?: Maybe<PlayerCreateOneInlineInput>;
};

export type SchoolCreateManyInlineInput = {
  /** Create and connect multiple existing School documents */
  create?: Maybe<Array<SchoolCreateInput>>;
  /** Connect multiple existing School documents */
  connect?: Maybe<Array<SchoolWhereUniqueInput>>;
};

export type SchoolCreateOneInlineInput = {
  /** Create and connect one School document */
  create?: Maybe<SchoolCreateInput>;
  /** Connect one existing School document */
  connect?: Maybe<SchoolWhereUniqueInput>;
};

/** An edge in a connection. */
export type SchoolEdge = {
  __typename?: 'SchoolEdge';
  /** The item at the end of the edge. */
  node: School;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SchoolManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SchoolWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SchoolWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SchoolWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  player?: Maybe<PlayerWhereInput>;
};

export enum SchoolOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC'
}

export type SchoolUpdateInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  player?: Maybe<PlayerUpdateOneInlineInput>;
};

export type SchoolUpdateManyInlineInput = {
  /** Create and connect multiple School documents */
  create?: Maybe<Array<SchoolCreateInput>>;
  /** Connect multiple existing School documents */
  connect?: Maybe<Array<SchoolConnectInput>>;
  /** Override currently-connected documents with multiple existing School documents */
  set?: Maybe<Array<SchoolWhereUniqueInput>>;
  /** Update multiple School documents */
  update?: Maybe<Array<SchoolUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple School documents */
  upsert?: Maybe<Array<SchoolUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple School documents */
  disconnect?: Maybe<Array<SchoolWhereUniqueInput>>;
  /** Delete multiple School documents */
  delete?: Maybe<Array<SchoolWhereUniqueInput>>;
};

export type SchoolUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type SchoolUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SchoolWhereInput;
  /** Update many input */
  data: SchoolUpdateManyInput;
};

export type SchoolUpdateOneInlineInput = {
  /** Create and connect one School document */
  create?: Maybe<SchoolCreateInput>;
  /** Update single School document */
  update?: Maybe<SchoolUpdateWithNestedWhereUniqueInput>;
  /** Upsert single School document */
  upsert?: Maybe<SchoolUpsertWithNestedWhereUniqueInput>;
  /** Connect existing School document */
  connect?: Maybe<SchoolWhereUniqueInput>;
  /** Disconnect currently connected School document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected School document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SchoolUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SchoolWhereUniqueInput;
  /** Document to update */
  data: SchoolUpdateInput;
};

export type SchoolUpsertInput = {
  /** Create document if it didn't exist */
  create: SchoolCreateInput;
  /** Update document if it exists */
  update: SchoolUpdateInput;
};

export type SchoolUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SchoolWhereUniqueInput;
  /** Upsert data */
  data: SchoolUpsertInput;
};

/** Identifies documents */
export type SchoolWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SchoolWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SchoolWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SchoolWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  player?: Maybe<PlayerWhereInput>;
};

/** References School record uniquely */
export type SchoolWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

/** Les arrets (de bus, de train) le long des routes  */
export type Stop = Node & {
  __typename?: 'Stop';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Stop>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  transitTypes: Array<TransitType>;
  routes: Array<Route>;
  /** List of Stop versions */
  history: Array<Version>;
};


/** Les arrets (de bus, de train) le long des routes  */
export type StopDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Les arrets (de bus, de train) le long des routes  */
export type StopRoutesArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Les arrets (de bus, de train) le long des routes  */
export type StopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type StopConnectInput = {
  /** Document to connect */
  where: StopWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type StopConnection = {
  __typename?: 'StopConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<StopEdge>;
  aggregate: Aggregate;
};

export type StopCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  transitTypes?: Maybe<Array<TransitType>>;
  routes?: Maybe<RouteCreateManyInlineInput>;
};

export type StopCreateManyInlineInput = {
  /** Create and connect multiple existing Stop documents */
  create?: Maybe<Array<StopCreateInput>>;
  /** Connect multiple existing Stop documents */
  connect?: Maybe<Array<StopWhereUniqueInput>>;
};

export type StopCreateOneInlineInput = {
  /** Create and connect one Stop document */
  create?: Maybe<StopCreateInput>;
  /** Connect one existing Stop document */
  connect?: Maybe<StopWhereUniqueInput>;
};

/** An edge in a connection. */
export type StopEdge = {
  __typename?: 'StopEdge';
  /** The item at the end of the edge. */
  node: Stop;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type StopManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StopWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  transitTypes?: Maybe<Array<TransitType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  transitTypes_not?: Maybe<Array<TransitType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  transitTypes_contains_all?: Maybe<Array<TransitType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  transitTypes_contains_some?: Maybe<Array<TransitType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  transitTypes_contains_none?: Maybe<Array<TransitType>>;
  routes_every?: Maybe<RouteWhereInput>;
  routes_some?: Maybe<RouteWhereInput>;
  routes_none?: Maybe<RouteWhereInput>;
};

export enum StopOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  TransitTypesAsc = 'transitTypes_ASC',
  TransitTypesDesc = 'transitTypes_DESC'
}

export type StopUpdateInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  transitTypes?: Maybe<Array<TransitType>>;
  routes?: Maybe<RouteUpdateManyInlineInput>;
};

export type StopUpdateManyInlineInput = {
  /** Create and connect multiple Stop documents */
  create?: Maybe<Array<StopCreateInput>>;
  /** Connect multiple existing Stop documents */
  connect?: Maybe<Array<StopConnectInput>>;
  /** Override currently-connected documents with multiple existing Stop documents */
  set?: Maybe<Array<StopWhereUniqueInput>>;
  /** Update multiple Stop documents */
  update?: Maybe<Array<StopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Stop documents */
  upsert?: Maybe<Array<StopUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Stop documents */
  disconnect?: Maybe<Array<StopWhereUniqueInput>>;
  /** Delete multiple Stop documents */
  delete?: Maybe<Array<StopWhereUniqueInput>>;
};

export type StopUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  transitTypes?: Maybe<Array<TransitType>>;
};

export type StopUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: StopWhereInput;
  /** Update many input */
  data: StopUpdateManyInput;
};

export type StopUpdateOneInlineInput = {
  /** Create and connect one Stop document */
  create?: Maybe<StopCreateInput>;
  /** Update single Stop document */
  update?: Maybe<StopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Stop document */
  upsert?: Maybe<StopUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Stop document */
  connect?: Maybe<StopWhereUniqueInput>;
  /** Disconnect currently connected Stop document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Stop document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type StopUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: StopWhereUniqueInput;
  /** Document to update */
  data: StopUpdateInput;
};

export type StopUpsertInput = {
  /** Create document if it didn't exist */
  create: StopCreateInput;
  /** Update document if it exists */
  update: StopUpdateInput;
};

export type StopUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: StopWhereUniqueInput;
  /** Upsert data */
  data: StopUpsertInput;
};

/** Identifies documents */
export type StopWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StopWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  transitTypes?: Maybe<Array<TransitType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  transitTypes_not?: Maybe<Array<TransitType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  transitTypes_contains_all?: Maybe<Array<TransitType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  transitTypes_contains_some?: Maybe<Array<TransitType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  transitTypes_contains_none?: Maybe<Array<TransitType>>;
  routes_every?: Maybe<RouteWhereInput>;
  routes_some?: Maybe<RouteWhereInput>;
  routes_none?: Maybe<RouteWhereInput>;
};

/** References Stop record uniquely */
export type StopWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

/** Un chemin conseille par un acteur de la mobilite */
export type Track = Node & {
  __typename?: 'Track';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Track>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<Player>;
  name?: Maybe<Scalars['String']>;
  /** Type de chemin : pedibus ... */
  type?: Maybe<Scalars['String']>;
  /** Le vecteur du chemin */
  geoJson?: Maybe<Scalars['Json']>;
  mobilityNodes: Array<MobilityNode>;
  /** List of Track versions */
  history: Array<Version>;
};


/** Un chemin conseille par un acteur de la mobilite */
export type TrackDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Un chemin conseille par un acteur de la mobilite */
export type TrackPlayerArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Un chemin conseille par un acteur de la mobilite */
export type TrackMobilityNodesArgs = {
  where?: Maybe<MobilityNodeWhereInput>;
  orderBy?: Maybe<MobilityNodeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Un chemin conseille par un acteur de la mobilite */
export type TrackHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TrackConnectInput = {
  /** Document to connect */
  where: TrackWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TrackConnection = {
  __typename?: 'TrackConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TrackEdge>;
  aggregate: Aggregate;
};

export type TrackCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerCreateOneInlineInput>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  geoJson?: Maybe<Scalars['Json']>;
  mobilityNodes?: Maybe<MobilityNodeCreateManyInlineInput>;
};

export type TrackCreateManyInlineInput = {
  /** Create and connect multiple existing Track documents */
  create?: Maybe<Array<TrackCreateInput>>;
  /** Connect multiple existing Track documents */
  connect?: Maybe<Array<TrackWhereUniqueInput>>;
};

export type TrackCreateOneInlineInput = {
  /** Create and connect one Track document */
  create?: Maybe<TrackCreateInput>;
  /** Connect one existing Track document */
  connect?: Maybe<TrackWhereUniqueInput>;
};

/** An edge in a connection. */
export type TrackEdge = {
  __typename?: 'TrackEdge';
  /** The item at the end of the edge. */
  node: Track;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TrackManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: Maybe<Scalars['String']>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
};

export enum TrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type TrackUpdateInput = {
  player?: Maybe<PlayerUpdateOneInlineInput>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  geoJson?: Maybe<Scalars['Json']>;
  mobilityNodes?: Maybe<MobilityNodeUpdateManyInlineInput>;
};

export type TrackUpdateManyInlineInput = {
  /** Create and connect multiple Track documents */
  create?: Maybe<Array<TrackCreateInput>>;
  /** Connect multiple existing Track documents */
  connect?: Maybe<Array<TrackConnectInput>>;
  /** Override currently-connected documents with multiple existing Track documents */
  set?: Maybe<Array<TrackWhereUniqueInput>>;
  /** Update multiple Track documents */
  update?: Maybe<Array<TrackUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Track documents */
  upsert?: Maybe<Array<TrackUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Track documents */
  disconnect?: Maybe<Array<TrackWhereUniqueInput>>;
  /** Delete multiple Track documents */
  delete?: Maybe<Array<TrackWhereUniqueInput>>;
};

export type TrackUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  geoJson?: Maybe<Scalars['Json']>;
};

export type TrackUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TrackWhereInput;
  /** Update many input */
  data: TrackUpdateManyInput;
};

export type TrackUpdateOneInlineInput = {
  /** Create and connect one Track document */
  create?: Maybe<TrackCreateInput>;
  /** Update single Track document */
  update?: Maybe<TrackUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Track document */
  upsert?: Maybe<TrackUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Track document */
  connect?: Maybe<TrackWhereUniqueInput>;
  /** Disconnect currently connected Track document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Track document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TrackUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TrackWhereUniqueInput;
  /** Document to update */
  data: TrackUpdateInput;
};

export type TrackUpsertInput = {
  /** Create document if it didn't exist */
  create: TrackCreateInput;
  /** Update document if it exists */
  update: TrackUpdateInput;
};

export type TrackUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TrackWhereUniqueInput;
  /** Upsert data */
  data: TrackUpsertInput;
};

/** Identifies documents */
export type TrackWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  type_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: Maybe<Scalars['String']>;
  mobilityNodes_every?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_some?: Maybe<MobilityNodeWhereInput>;
  mobilityNodes_none?: Maybe<MobilityNodeWhereInput>;
};

/** References Track record uniquely */
export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Type de transport */
export enum TransitType {
  Bus = 'Bus',
  Train = 'Train'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}
