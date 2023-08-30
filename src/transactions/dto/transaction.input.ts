import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Transaction } from '../schemas/transaction.schema';

@InputType()
export class CreateTransactionInput extends OmitType(
  Transaction,
  ['_id'],
  InputType,
) {}

@InputType()
export class UpdateTransactionInput extends PartialType(
  Transaction,
  InputType,
) {
  @Field(() => ID)
  @IsMongoId()
  _id: ObjectId;
}

@InputType()
export class TransactionFilter extends PartialType(Transaction, InputType) {
  @Field(() => ID)
  @IsMongoId()
  hotel: ObjectId;
}