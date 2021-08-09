import { baseApi } from "./base/baseApi";
import { ILikeWare } from "./viewModel/ILikeWare";

export default class homeApi extends baseApi {
  static async GetData() {
    const uri = "/DataPlatform/GetIndexGuessLikeProducts";
    const result = await super.get<ILikeWare[]>(
      uri
    );
    return result;
  }
}
