import { inject } from "inversify";
import { TYPES } from "@core/container/types";
import { BaseService } from "@services/BaseService";
import { JournalSearchResponse } from "@model/journal/JournalSearchResponse";

export class JournalService extends BaseService {
  public constructor(
    @inject(TYPES.ConnectionProvider) public connectionProvider
  ) {
    super();
  }

  public createJournal() {}
  public selectJournals() {}
  public updateJournal() {}
  public deleteJournals() {}
}
